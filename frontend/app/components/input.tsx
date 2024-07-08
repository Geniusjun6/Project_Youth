interface LabelAndInputProps {
  label: string;
  labelDescription?: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refValue?: React.RefObject<HTMLInputElement>;
}

export default function LabelAndInput({
  label,
  type,
  name,
  id,
  placeholder,
  labelDescription,
  value,
  onChange,
  refValue
}: LabelAndInputProps) {
  return (
    <div className="space-y-2">
      <label className="font-bold md:text-lg" htmlFor={id}>
        <h1>{label}</h1>
        {labelDescription ? <p className="text-sm font-normal text-text_color-gray2">{labelDescription}</p> : ""}
      </label>
      <input
        className="p-2.5 border border-text_color-gray2 w-full rounded-md md:p-3 md:rounded-lg"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={refValue}
      />
    </div>
  );
}
