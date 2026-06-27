import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus('Sending...');

    const { error } = await supabase.from('contact_messages').insert(form);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus('Thank you. Your message was sent.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  }

  return (
    <section className="section py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold">Contact Me</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Have a question about courses, tutoring, learning paths, or digital learning materials? Send a message.
          </p>
          <div className="card mt-8 p-6">
            <h2 className="text-xl font-bold">Good for</h2>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Beginner technology learning</li>
              <li>• Data analytics career change</li>
              <li>• AI project coaching</li>
              <li>• Math and coding support</li>
            </ul>
          </div>
        </div>

        <form onSubmit={submitForm} className="card p-6">
          <label className="label">Name</label>
          <input className="input" name="name" value={form.name} onChange={updateField} required />

          <label className="label mt-4">Email</label>
          <input className="input" type="email" name="email" value={form.email} onChange={updateField} required />

          <label className="label mt-4">Subject</label>
          <input className="input" name="subject" value={form.subject} onChange={updateField} />

          <label className="label mt-4">Message</label>
          <textarea className="input min-h-36" name="message" value={form.message} onChange={updateField} required />

          <button className="btn-primary mt-6 w-full">Send Message</button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
