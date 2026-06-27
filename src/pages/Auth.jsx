import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setStatus('Please wait...');

    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName
          }
        }
      });
      if (error) setStatus(error.message);
      else setStatus('Registration successful. Check your email if confirmation is enabled, then login.');
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password
      });
      if (error) setStatus(error.message);
      else navigate('/dashboard');
    }
  }

  return (
    <section className="section flex justify-center py-16">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-3xl font-extrabold">{mode === 'login' ? 'Login' : 'Register'}</h1>
        <p className="mt-2 text-slate-600">Access your courses and learning dashboard.</p>

        <form onSubmit={submit} className="mt-6">
          {mode === 'register' && (
            <>
              <label className="label">Full Name</label>
              <input className="input" name="fullName" value={form.fullName} onChange={updateField} required />
            </>
          )}

          <label className="label mt-4">Email</label>
          <input className="input" type="email" name="email" value={form.email} onChange={updateField} required />

          <label className="label mt-4">Password</label>
          <input className="input" type="password" name="password" value={form.password} onChange={updateField} required minLength={6} />

          <button className="btn-primary mt-6 w-full">
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <button
          className="mt-5 text-sm font-semibold text-brand-700"
          onClick={() => {
            setMode(mode === 'login' ? 'register' : 'login');
            setStatus('');
          }}
        >
          {mode === 'login' ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>

        {status && <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">{status}</p>}
      </div>
    </section>
  );
}
