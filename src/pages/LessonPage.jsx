import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LessonPage() {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLesson() {
      const { data, error } = await supabase
        .from('lessons')
        .select('*, courses(title, slug)')
        .eq('id', lessonId)
        .single();

      if (error) {
        console.error('Lesson fetch error:', error);
      }

      setLesson(data);
      setLoading(false);
    }

    fetchLesson();
  }, [lessonId]);

  if (loading) {
    return <section className="section py-16">Loading lesson...</section>;
  }

  if (!lesson) {
    return (
      <section className="section py-16">
        <h1 className="text-3xl font-bold">Lesson not found</h1>
        <p className="mt-3 text-slate-600">
          This lesson does not exist or is not available.
        </p>
      </section>
    );
  }

  const videoUrl = lesson.video_url || '';
  const isYouTube =
    videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

  return (
    <section className="section py-16">
      <div className="mb-8">
        <Link
          to={`/courses/${lesson.courses?.slug}`}
          className="font-semibold text-brand-700 hover:text-brand-900"
        >
          ← Back to {lesson.courses?.title}
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="font-semibold text-brand-700">
            {lesson.courses?.title}
          </p>

          <h1 className="mt-2 text-4xl font-extrabold leading-tight">
            {lesson.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {lesson.description}
          </p>

          <div className="card mt-8 overflow-hidden p-4">
            {videoUrl ? (
              isYouTube ? (
                <iframe
                  className="aspect-video w-full rounded-2xl"
                  src={videoUrl.replace('watch?v=', 'embed/')}
                  title={lesson.title}
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full rounded-2xl"
                  src={videoUrl}
                  controls
                />
              )
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                Video will be added soon.
              </div>
            )}
          </div>

          <article className="card mt-8 p-6">
            <h2 className="text-2xl font-bold">Lesson Notes</h2>

            {lesson.content ? (
                                 <div className="prose prose-slate mt-6 max-w-none leading-8">
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {lesson.content}
                                   </ReactMarkdown>
                                 </div>
            ) : (
              <p className="mt-4 text-slate-600">
                Lesson notes will be added soon.
              </p>
            )}
          </article>
        </div>

        <aside className="card h-fit p-6">
          <h2 className="text-xl font-bold">Lesson Details</h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <p>
              <strong>Order:</strong> Lesson {lesson.order_index}
            </p>
            <p>
              <strong>Preview:</strong>{' '}
              {lesson.free_preview ? 'Free preview' : 'Enrolled students'}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-brand-50 p-4">
            <h3 className="font-bold text-brand-900">Learning Tip</h3>
            <p className="mt-2 text-sm leading-6 text-brand-900">
              Watch the video first, then read the notes, then complete the
              practice activity.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}