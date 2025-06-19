import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <main className="mt-[66px] sm:mt-[82px] px-[3%] md:px-[7%]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
