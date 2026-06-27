import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const fallbackPosts = [
  {
    id: 'b1',
    title: 'How to Start Learning AI as a Beginner',
    excerpt: 'A simple path for beginners who want to enter AI and data careers.',
    content: 'Start with Python, statistics, data analysis, machine learning basics, and one portfolio project.'
  },
  {
    id: 'b2',
    title: 'Why Math Still Matters in AI',
    excerpt: 'AI is powerful, but math helps you understand what is happening behind the model.',
    content: 'Linear algebra, probability, calculus, and optimization are foundations of machine learning.'
  }
];

export default function Blog() {
  const [posts, setPosts] = useState(fallbackPosts);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase.from('blog_posts').select('*').eq('published', true).order('created_at', { ascending: false });
      if (data?.length) setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <section className="section py-16">
      <h1 className="text-4xl font-extrabold">Blog</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">
        Articles about math, coding, analytics, AI projects, and career growth.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="card p-6">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3 text-slate-600">{post.excerpt}</p>
            <p className="mt-5 text-slate-700">{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
