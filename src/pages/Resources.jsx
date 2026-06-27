import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const fallbackResources = [
  {
    id: 'r1',
    title: 'Python Beginner Checklist',
    description: 'A simple checklist for learning Python step by step.',
    file_url: '#',
    resource_type: 'pdf'
  },
  {
    id: 'r2',
    title: 'Power BI Dashboard Planning Template',
    description: 'Plan your report before creating visuals.',
    file_url: '#',
    resource_type: 'pdf'
  }
];

export default function Resources() {
  const [resources, setResources] = useState(fallbackResources);

  useEffect(() => {
    async function fetchResources() {
      const { data } = await supabase.from('resources').select('*').order('created_at', { ascending: false });
      if (data?.length) setResources(data);
    }
    fetchResources();
  }, []);

  return (
    <section className="section py-16">
      <h1 className="text-4xl font-extrabold">Learning Resources</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">
        Download PDFs, worksheets, project guides, and study materials.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <div key={resource.id} className="card p-6">
            <h2 className="text-xl font-bold">{resource.title}</h2>
            <p className="mt-2 text-slate-600">{resource.description}</p>
            <a href={resource.file_url} className="btn-primary mt-5" target="_blank" rel="noreferrer">
              <Download className="mr-2" size={18} /> Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
