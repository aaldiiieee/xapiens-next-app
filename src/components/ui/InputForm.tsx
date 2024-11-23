interface InputFormProps {
  type: string;
  id: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({ type, id, value, onChange, required }: InputFormProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
      onChange={onChange}
      required={required}
    />
  );
};

export default InputForm;
