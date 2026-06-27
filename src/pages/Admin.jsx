import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import useAuth from '../hooks/useAuth';

const emptyCourse = {
  title: '',
  slug: '',
  short_description: '',
  description: '',
  category: 'Python',
  level: 'Beginner',
  price: 0,
  duration: '',
  image_url: '',
  published: true
};

export default function Admin() {
  const { session } = useAuth();
  const [course, setCourse] = useState(emptyCourse);
  const [status, setStatus] = useState('');

  function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    const updated = { ...course, [name]: type === 'checkbox' ? checked : value };
    if (name === 'title') updated.slug = slugify(value);
    setCourse(updated);
  }

  async function createCourse(event) {
    event.preventDefault();
    setStatus('Creating course...');

    const { error } = await supabase.from('courses').insert({
      ...course,
      price: Number(course.price),
      created_by: session.user.id
    });

    if (error) setStatus(error.message);
    else {
      setStatus('Course created successfully.');
      setCourse(emptyCourse);
    }
  }

  return (
    <section className="section py-16">
      <h1 className="text-4xl font-extrabold">Admin Page</h1>
      <p className="mt-4 text-slate-600">Add new courses to your platform.</p>

      <form onSubmit={createCourse} className="card mt-8 grid gap-4 p-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="label">Course Title</label>
          <input className="input" name="title" value={course.title} onChange={updateField} required />
        </div>

        <div>
          <label className="label">Slug</label>
          <input className="input" name="slug" value={course.slug} onChange={updateField} required />
        </div>

        <div>
          <label className="label">Category</label>
          <select className="input" name="category" value={course.category} onChange={updateField}>
            <option>Math</option>
            <option>Python</option>
            <option>SQL</option>
            <option>Power BI</option>
            <option>Microsoft Fabric</option>
            <option>AI</option>
            <option>Data Analytics</option>
          </select>
        </div>

        <div>
          <label className="label">Level</label>
          <select className="input" name="level" value={course.level} onChange={updateField}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div>
          <label className="label">Duration</label>
          <input className="input" name="duration" value={course.duration} onChange={updateField} placeholder="Example: 4 weeks" />
        </div>

        <div>
          <label className="label">Price</label>
          <input className="input" name="price" type="number" value={course.price} onChange={updateField} />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input className="input" name="image_url" value={course.image_url} onChange={updateField} />
        </div>

        <div className="md:col-span-2">
          <label className="label">Short Description</label>
          <input className="input" name="short_description" value={course.short_description} onChange={updateField} required />
        </div>

        <div className="md:col-span-2">
          <label className="label">Full Description</label>
          <textarea className="input min-h-36" name="description" value={course.description} onChange={updateField} required />
        </div>

        <label className="flex items-center gap-2 md:col-span-2">
          <input type="checkbox" name="published" checked={course.published} onChange={updateField} />
          Published
        </label>

        <div className="md:col-span-2">
          <button className="btn-primary">Create Course</button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </div>
      </form>
    </section>
  );
}
