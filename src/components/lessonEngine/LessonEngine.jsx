import LessonRenderer from "./LessonRenderer";

export default function LessonEngine({
  lesson,
  onProgressUpdate,
}) {
  return (
    <LessonRenderer
      lesson={lesson}
      onProgressUpdate={onProgressUpdate}
    />
  );
}