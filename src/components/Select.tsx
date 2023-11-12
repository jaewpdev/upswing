import { Option } from "../static/contactFormItems";

interface SelectProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  className?: string;
  options?: Option[];
}

export default function Select({
  label,
  id,
  name,
  required = true,
  className,
  options,
}: SelectProps) {
  return (
    <div className={`${className}`}>
      <label htmlFor={name}>{label}</label>
      <select id={id} name={name} required={required}>
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
