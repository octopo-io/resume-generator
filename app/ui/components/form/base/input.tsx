import { useCallback, ChangeEvent } from 'react';

export function Input({
  label,
  name,
  value,
  onChange,
}: {
  label?: string;
  name: string;
  value?: string;
  onChange?: Function;
}) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    [onChange],
  );
  return (
    <div className="flex-row">
      {label && (
        <label htmlFor={name} className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className="mb-3 w-full rounded-md border p-2"
        onChange={handleChange}
        defaultValue={value}
      />
    </div>
  );
}
