import VideoPlayer from "../VideoPlayer";

export default function LearnSection({ learn, lessonTitle }) {
  if (!learn) {
    return null;
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {learn.title || "Learn"}
      </h2>

      {learn.introduction && (
        <p className="mt-5 leading-8 text-slate-700">
          {learn.introduction}
        </p>
      )}

      {learn.video?.url && (
        <div className="mt-6">
          <VideoPlayer
            src={learn.video.url}
            title={learn.video.title || lessonTitle || "Lesson"}
          />
        </div>
      )}

      {learn.notes && (
        <div className="mt-6 rounded-2xl bg-slate-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Lesson Notes
          </h3>

          <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
            {learn.notes}
          </p>
        </div>
      )}

      {learn.sections?.length > 0 && (
        <div className="mt-6 space-y-5">
          {learn.sections.map((section, index) => (
            <article
              key={section.id || section.title || index}
              className="rounded-2xl border border-slate-200 p-6"
            >
              {section.title && (
                <h3 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h3>
              )}

              {section.content && (
                <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
                  {section.content}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}