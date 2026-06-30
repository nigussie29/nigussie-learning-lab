import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CourseCard({ course }) {
  return (
    <Card className="flex flex-col p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Badge>{course.category}</Badge>

        <span className="text-sm font-semibold text-slate-500">
          {course.duration}
        </span>
      </div>

      <h2 className="text-xl font-bold text-slate-900">{course.title}</h2>

      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {course.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="font-semibold text-slate-900">Level</p>
          <p className="mt-1 text-slate-600">{course.level}</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="font-semibold text-slate-900">Lessons</p>
          <p className="mt-1 text-slate-600">{course.lessons}</p>
        </div>
      </div>

      <Button to={`/courses/${course.slug}`} className="mt-6">
        View Course
      </Button>
    </Card>
  );
}