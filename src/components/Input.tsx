import {
  Option,
  ReactHookFormsValidationFields,
} from "../static/contactFormItems";

export default function Input({
  register,
  errors,
  label,
  id,
  type,
  className,
  validation,
  errorMessages,
  options,
}: {
  register: any;
  errors: any;
  label: string;
  id: string;
  type: "text" | "url" | "select" | "textarea";
  className?: string;
  validation?: ReactHookFormsValidationFields;
  errorMessages?: any;
  options?: Option[];
}) {
  const typeMap = {
    text: (
      <input
        aria-invalid={errors[id] ? "true" : "false"}
        placeholder={label}
        className="rounded-[32px] bg-white  px-6 py-4 md:px-8 md:py-6"
        type={type}
        {...register(id, { ...validation })}
      />
    ),
    url: (
      <input
        aria-invalid={errors[id] ? "true" : "false"}
        placeholder={label}
        className="rounded-[32px] bg-white  px-6 py-4 md:px-8 md:py-6"
        type={type}
        {...register(id, { ...validation })}
      />
    ),
    select: (
      <select
        className="rounded-[32px] bg-white  px-6 py-4 md:px-8 md:py-6 appearance-none relative"
        defaultValue=""
        {...register(id, {
          ...validation,
          [id]: (value: any) => value !== "" // Custom validation message
        })}
      >
        {options &&
          options.map(({ value, text }, index) => {
            const isPlaceHolder = index === 0;
            return (
              <option
                key={value}
                value={value}
                disabled={isPlaceHolder}
                // hidden={isPlaceHolder}
              >
                {text}
              </option>
            );
          })}
      </select>
    ),
    textarea: (
      <textarea
        className="rounded-[32px] bg-white  px-6 py-4 md:px-8 md:py-6 resize-none"
        rows={3}
        {...register(id, { ...validation })}
      ></textarea>
    ),
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-gray-500 mb-2 ml-4 text-sm" htmlFor={id}>
        {label}{" "}
        {validation && validation.required && (
          <span className="font-bold">*</span>
        )}
      </label>
      {typeMap[type]}
      {errors[id] && (
        <p role="alert" className="text-red-500 text-sm ml-4 mt-2">
          {errorMessages[errors[id].type]}
        </p>
      )}
    </div>
  );
}
