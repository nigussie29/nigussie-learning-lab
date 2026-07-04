export default function VideoPlayer({ src }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg">
      <iframe
        className="aspect-video w-full"
        src={src}
        title="Lesson Video"
        allowFullScreen
      />
    </div>
  );
}