'use client';
import ResumeForm from '@/app/ui/components/form/resume-form';
import { useState } from 'react';
import { ResumeFormData } from '@/app/lib/definitions';
import Preview from '@/app/ui/components/preview';

export default function Home() {
  let initialData: ResumeFormData = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    jobTitle: '',
  };

  if (typeof localStorage !== 'undefined') {
    const data = localStorage.getItem('formData');
    initialData = data ? JSON.parse(data) : initialData;
  }
  const [formData, setFormData] = useState<ResumeFormData>(initialData);

  return (
    <main className="flex min-h-screen flex-row space-x-10 p-6">
      <div className="basis-1/2">
        <h2 className="mb-5 text-lg font-extrabold uppercase">
          Résumé Generator
        </h2>
        <ResumeForm data={formData} onChange={setFormData} />
      </div>
      <div className="basis-1/2">
        <h2 className="text-lg font-extrabold uppercase">Preview</h2>
        <Preview formData={formData} />
      </div>
    </main>
  );
}
