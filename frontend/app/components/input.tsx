interface LabelAndInputProps {
  label: string;
  labelDescription?: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LabelAndInput({
  label,
  type,
  name,
  id,
  placeholder,
  labelDescription,
  value,
  onChange
}: LabelAndInputProps) {
  return (
    <div className="space-y-2">
      <label className="font-bold md:text-lg" htmlFor={id}>
        <h1>{label}</h1>
        {labelDescription ? <p>{labelDescription}</p> : ""}
      </label>
      <input
        className="p-2.5 border w-full rounded-md md:p-4 md:rounded-lg"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
