import { Download, FileText, Database, Code2, FileSpreadsheet } from "lucide-react";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";

const resources = [
  {
    icon: FileText,
    title: "Python Cheat Sheet",
    type: "PDF",
    description:
      "Quick reference for Python syntax, variables, loops, functions, and more.",
  },
  {
    icon: Database,
    title: "SQL Practice Database",
    type: "SQL",
    description:
      "Sample database for practicing SELECT, JOIN, GROUP BY, and other SQL queries.",
  },
  {
    icon: FileSpreadsheet,
    title: "Power BI Sales Dataset",
    type: "Excel",
    description:
      "Realistic business dataset for dashboards, reports, and DAX practice.",
  },
  {
    icon: Code2,
    title: "Python Project Starter Files",
    type: "ZIP",
    description:
      "Starter code for Python exercises and portfolio projects.",
  },
  {
    icon: FileText,
    title: "AI & Machine Learning Notes",
    type: "PDF",
    description:
      "Beginner-friendly notes covering AI concepts and machine learning fundamentals.",
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Fabric Lab Files",
    type: "Notebook",
    description:
      "Practice notebooks and datasets for Microsoft Fabric data engineering.",
  },
];

export default function Resources() {
  return (
    <section className="section py-16">
      <SectionHeader
        label="Learning Resources"
        title="Download resources for your courses."
        description="Access downloadable notes, datasets, source code, cheat sheets, and project files designed to help you practice and master new skills."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.title} className="flex flex-col p-6">
            <resource.icon className="text-blue-600" size={36} />

            <Badge className="mt-4 bg-blue-100">
              {resource.type}
            </Badge>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              {resource.title}
            </h2>

            <p className="mt-3 flex-1 leading-7 text-slate-600">
              {resource.description}
            </p>

            <Button className="mt-6">
              <Download size={18} className="mr-2" />
              Download
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white md:p-10">
        <h2 className="text-3xl font-extrabold">
          Everything you need to succeed.
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Every SkillBridge Academy course includes carefully prepared learning
          materials, project files, datasets, and reference guides to help you
          build practical skills and complete real-world projects.
        </p>
      </div>
    </section>
  );
}