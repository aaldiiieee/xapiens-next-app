interface ButtonSubmitProps {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
}

const ButtonSubmit = ({ text, type, onClick }: ButtonSubmitProps) => {
  return (
    <button
      className="btn__submit text-white font-bold py-2 px-4 rounded"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
