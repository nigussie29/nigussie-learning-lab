export default function About() {
  return (
    <section className="section py-16">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold">About Me</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            My mission is to help beginners become confident creators in technology. I focus on practical learning in math, programming, data analytics, Power BI, SQL, Microsoft Fabric, and artificial intelligence.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This platform is built for students, adults changing careers, and anyone who wants to understand technology step by step. The goal is not only to watch videos, but to build real projects and develop useful skills.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold">Learning Philosophy</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Simple explanation first</li>
            <li>• Practice with real examples</li>
            <li>• Build projects for confidence</li>
            <li>• Connect learning to career goals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
