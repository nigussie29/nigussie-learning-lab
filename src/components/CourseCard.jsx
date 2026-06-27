import { Link } from 'react-router-dom';
import { Clock, BarChart3 } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <article className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={course.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'}
        alt={course.title}
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
            {course.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold">{course.title}</h3>
        <p className="mt-2 text-slate-600">{course.short_description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Clock size={16} /> {course.duration || 'Self-paced'}</span>
          <span className="flex items-center gap-1"><BarChart3 size={16} /> {course.price > 0 ? `$${course.price}` : 'Free preview'}</span>
        </div>
        <Link to={`/courses/${course.slug}`} className="btn-primary mt-5 w-full">
          View Course
        </Link>
      </div>
    </article>
  );
}
