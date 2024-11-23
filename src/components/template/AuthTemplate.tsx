interface AuthTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthTemplate = ({ children, title, description }: AuthTemplateProps) => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      {children}
    </div>
  );
};

export default AuthTemplate;
