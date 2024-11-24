interface AuthTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthTemplate = ({ children, title, description }: AuthTemplateProps) => {
  return (
    <div className="bg-white p-8 shadow-[#000_8px_8px_0px_0px] rounded-lg w-full max-w-md border-2 border-black">
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      {children}
    </div>
  );
};

export default AuthTemplate;
