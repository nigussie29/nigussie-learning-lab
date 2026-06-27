import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import useAuth from '../hooks/useAuth';

export default function Dashboard() {
  const { session, profile } = useAuth();
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function fetchEnrollments() {
      if (!session?.user?.id) return;
      const { data } = await supabase
        .from('enrollments')
        .select('*, courses(*)')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });

      setEnrollments(data || []);
    }
    fetchEnrollments();
  }, [session]);

  return (
    <section className="section py-16">
      <h1 className="text-4xl font-extrabold">Student Dashboard</h1>
      <p className="mt-3 text-slate-600">Welcome, {profile?.full_name || session?.user?.email}.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">My Courses</h2>
        {enrollments.length === 0 ? (
          <div className="card mt-5 p-6">
            <p className="text-slate-600">You are not enrolled yet.</p>
            <Link to="/courses" className="btn-primary mt-4">Browse Courses</Link>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {enrollments.map((enrollment) => (
              <div className="card p-6" key={enrollment.id}>
                <h3 className="text-xl font-bold">{enrollment.courses?.title}</h3>
                <p className="mt-2 text-slate-600">{enrollment.courses?.short_description}</p>
                <Link to={`/courses/${enrollment.courses?.slug}`} className="btn-primary mt-5">Continue</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
