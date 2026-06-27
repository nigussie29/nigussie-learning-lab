import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard.jsx';
import { supabase } from '../lib/supabaseClient';
import { fallbackCourses } from '../lib/courseData';

export default function Courses() {
  const [courses, setCourses] = useState(fallbackCourses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (!error && data?.length) setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  return (
    <section className="section py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold">Courses</h1>
        <p className="mt-4 text-lg text-slate-600">
          Choose a course and start building practical skills in math, coding, analytics, and AI.
        </p>
      </div>
      {loading ? (
        <p className="mt-10">Loading courses...</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      )}
    </section>
  );
}
