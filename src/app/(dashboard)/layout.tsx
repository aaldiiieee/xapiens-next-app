import Navbar from "@/components/partials/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="container">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
