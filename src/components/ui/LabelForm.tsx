const LabelForm = ({ text, htmlFor }: { text: string; htmlFor: string }) => {
  return (
    <label className="block text-gray-700 mb-2" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default LabelForm;
