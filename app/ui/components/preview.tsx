'use client';
import { ResumeFormData } from '@/app/lib/definitions';

export default function Preview({ formData }: { formData: ResumeFormData }) {
  return (
    <div>
      <div className="text-center">
        <p className="mb-1 text-xl font-bold">
          {formData.name} {formData.lastname}
        </p>
        <div className="mb-1 flex flex-row justify-center space-x-5">
          <div>✉️ {formData.email}</div>
          <div>📞 {formData.phone}</div>
        </div>
        <p className="font-bold">{formData.jobTitle}</p>
      </div>
    </div>
  );
}
