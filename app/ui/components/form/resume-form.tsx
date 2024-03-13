'use client';
import { Input } from '@/app/ui/components/form/base/input';
import { ChangeEvent, useEffect } from 'react';
import { ResumeFormData } from '@/app/lib/definitions';

export default function ResumeForm({
  data,
  onChange,
}: {
  data: ResumeFormData;
  onChange: Function;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  return (
    <form>
      <div className="flex flex-row">
        <div className="basis-2/3">
          <Input
            label="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <Input
            label="Lastname"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
          <Input
            label="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <Input
            label="Phone"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />
          <Input
            label="Job Title"
            name="jobTitle"
            onChange={handleChange}
            value={data.jobTitle}
          />
        </div>
      </div>
    </form>
  );
}
