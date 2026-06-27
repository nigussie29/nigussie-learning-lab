import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Download } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { fallbackCourses } from '../lib/courseData';
import useAuth from '../hooks/useAuth';

export default function CourseDetail() {
  const { slug } = useParams();
  const { session } = useAuth();

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [resources, setResources] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchCourse() {
      const { data } = await supabase
        .from('courses')
        .select('*')
        .eq('slug', slug)
        .single();

      const selected = data || fallbackCourses.find((item) => item.slug === slug);
      setCourse(selected || null);

      if (selected?.id && !String(selected.id).startsWith('fallback')) {
        const { data: lessonData } = await supabase
          .from('lessons')
          .select('*')
          .eq('course_id', selected.id)
          .order('order_index');

        setLessons(lessonData || []);

        const { data: resourceData } = await supabase
          .from('resources')
          .select('*')
          .eq('course_id', selected.id)
          .order('created_at', { ascending: false });

        setResources(resourceData || []);
      }
    }

    fetchCourse();
  }, [slug]);

  async function enroll() {
    if (!session) {
      setMessage('Please login or register first.');
      return;
    }

    const { error } = await supabase.from('enrollments').insert({
      user_id: session.user.id,
      course_id: course.id
    });

    setMessage(error ? error.message : 'You are enrolled. Go to your dashboard.');
  }

  if (!course) {
    return <section className="section py-16">Course not found.</section>;
  }

  return (
    <section className="section py-16">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img
            src={course.image_url}
            alt={course.title}
            className="h-72 w-full rounded-3xl object-cover"
          />

          <h1 className="mt-8 text-4xl font-extrabold">{course.title}</h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {course.description}
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Lessons</h2>

            <div className="mt-4 space-y-3">
              {lessons.length === 0 ? (
                <p className="text-slate-600">
                  Lessons will appear here after you add them.
                </p>
              ) : (
                lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/lessons/${lesson.id}`}
                    className="block rounded-2xl border border-slate-200 bg-white p-4 hover:border-brand-500"
                  >
                    <span className="font-semibold">
                      {lesson.order_index}. {lesson.title}
                    </span>
                    <p className="mt-1 text-sm text-slate-600">
                      {lesson.description}
                    </p>
                  </Link>
                ))
              )}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Downloadable Resources</h2>

            <div className="mt-4 space-y-3">
              {resources.length === 0 ? (
                <p className="text-slate-600">
                  Downloadable PDFs and worksheets will appear here soon.
                </p>
              ) : (
                resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {resource.description}
                      </p>
                    </div>

                    <a
                      href={resource.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <Download className="mr-2" size={18} />
                      Download
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <aside className="card h-fit p-6">
          <h2 className="text-xl font-bold">Course Information</h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>
              <strong>Category:</strong> {course.category}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration || 'Self-paced'}
            </p>
            <p>
              <strong>Price:</strong>{' '}
              {course.price > 0 ? `$${course.price}` : 'Free preview'}
            </p>
          </div>

          <button onClick={enroll} className="btn-primary mt-6 w-full">
            Register for Course
          </button>

          {message && (
            <p className="mt-4 rounded-xl bg-brand-50 p-3 text-sm text-brand-700">
              {message}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}