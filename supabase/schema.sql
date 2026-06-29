-- SkillBridge Academy database schema
-- Run this in Supabase SQL Editor.

create extension if not exists "uuid-ossp";

-- Profiles are connected to Supabase auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  role text default 'student' check (role in ('student', 'admin')),
  created_at timestamptz default now()
);

create table if not exists public.courses (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  short_description text not null,
  description text not null,
  category text not null,
  level text not null default 'Beginner',
  price numeric(10,2) default 0,
  duration text,
  image_url text,
  published boolean default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.lessons (
  id uuid primary key default uuid_generate_v4(),
  course_id uuid references public.courses(id) on delete cascade,
  title text not null,
  description text,
  video_url text,
  order_index integer default 1,
  free_preview boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.resources (
  id uuid primary key default uuid_generate_v4(),
  course_id uuid references public.courses(id) on delete set null,
  title text not null,
  description text,
  file_url text not null,
  resource_type text default 'pdf',
  created_at timestamptz default now()
);

create table if not exists public.enrollments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  status text default 'active' check (status in ('active', 'completed', 'cancelled')),
  created_at timestamptz default now(),
  unique(user_id, course_id)
);

create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  published boolean default true,
  created_at timestamptz default now()
);

-- Create profile automatically when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email,
    'student'
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.lessons enable row level security;
alter table public.resources enable row level security;
alter table public.enrollments enable row level security;
alter table public.contact_messages enable row level security;
alter table public.blog_posts enable row level security;

-- Helper: admin check
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer;

-- Profiles
create policy "Users can read own profile"
on public.profiles for select
using (auth.uid() = id or public.is_admin());

create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id);

-- Courses: public can read published courses
create policy "Anyone can read published courses"
on public.courses for select
using (published = true or public.is_admin());

create policy "Admins can insert courses"
on public.courses for insert
with check (public.is_admin());

create policy "Admins can update courses"
on public.courses for update
using (public.is_admin());

create policy "Admins can delete courses"
on public.courses for delete
using (public.is_admin());

-- Lessons: public can read lessons for published courses
create policy "Anyone can read lessons for published courses"
on public.lessons for select
using (
  exists (
    select 1 from public.courses
    where courses.id = lessons.course_id and courses.published = true
  ) or public.is_admin()
);

create policy "Admins can manage lessons"
on public.lessons for all
using (public.is_admin())
with check (public.is_admin());

-- Resources
create policy "Anyone can read resources"
on public.resources for select
using (true);

create policy "Admins can manage resources"
on public.resources for all
using (public.is_admin())
with check (public.is_admin());

-- Enrollments
create policy "Users can read own enrollments"
on public.enrollments for select
using (auth.uid() = user_id or public.is_admin());

create policy "Users can enroll themselves"
on public.enrollments for insert
with check (auth.uid() = user_id);

create policy "Admins can update enrollments"
on public.enrollments for update
using (public.is_admin());

-- Contact messages
create policy "Anyone can send contact messages"
on public.contact_messages for insert
with check (true);

create policy "Admins can read contact messages"
on public.contact_messages for select
using (public.is_admin());

-- Blog
create policy "Anyone can read published posts"
on public.blog_posts for select
using (published = true or public.is_admin());

create policy "Admins can manage blog posts"
on public.blog_posts for all
using (public.is_admin())
with check (public.is_admin());

-- Starter content
insert into public.courses (title, slug, short_description, description, category, level, price, duration, image_url, published)
values
('Python for Beginners', 'python-for-beginners', 'Learn Python from zero with real practice.', 'A beginner-friendly course covering variables, loops, functions, files, and small projects.', 'Python', 'Beginner', 0, '4 weeks', 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935', true),
('Power BI Data Analytics', 'power-bi-data-analytics', 'Build dashboards and analyze data using Power BI.', 'Learn data cleaning, modeling, DAX basics, and dashboard storytelling.', 'Data Analytics', 'Beginner', 0, '5 weeks', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', true),
('AI Project Portfolio Builder', 'ai-project-portfolio-builder', 'Create practical AI projects for your resume.', 'Build real AI/Data portfolio projects with Python, ML, and deployment basics.', 'AI', 'Intermediate', 0, '6 weeks', 'https://images.unsplash.com/photo-1677442136019-21780ecad995', true),
('SQL and Microsoft Fabric Foundations', 'sql-microsoft-fabric-foundations', 'Learn SQL and modern analytics with Microsoft Fabric.', 'Understand databases, queries, lakehouses, warehouses, and analytics workflows.', 'SQL', 'Beginner', 0, '4 weeks', 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d', true)
on conflict (slug) do nothing;

insert into public.blog_posts (title, slug, excerpt, content, published)
values
('How to Start Learning AI as a Beginner', 'start-learning-ai-beginner', 'A simple path for beginners who want to enter AI and data careers.', 'Start with Python, statistics, data analysis, machine learning basics, and one portfolio project.', true),
('Why Math Still Matters in AI', 'why-math-matters-ai', 'AI is powerful, but math helps you understand what is happening behind the model.', 'Linear algebra, probability, calculus, and optimization are foundations of machine learning.', true)
on conflict (slug) do nothing;
