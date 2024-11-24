interface InputFormProps {
  type: string;
  id: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({
  type,
  id,
  value,
  onChange,
  required,
  name,
}: InputFormProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      className="w-full px-4 py-2 border-2 border-black rounded-md outline-none shadow-[#000_6px_6px_0px_0px] focus:shadow-none focus:translate-y-1 focus:translate-x-1 transition-all"
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

export default InputForm;
