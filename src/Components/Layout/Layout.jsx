import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ExamCountdown from "../Home/Count";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-end">
          <ExamCountdown />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;