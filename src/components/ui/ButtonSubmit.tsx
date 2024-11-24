interface ButtonSubmitProps {
  text: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}

const ButtonSubmit = ({ text, type, className, onClick }: ButtonSubmitProps) => {
  return (
    <button
      className={`font-medium w-full py-2 px-4 rounded ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
