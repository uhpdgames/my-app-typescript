import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/common";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from "../context/useAuth";

const BaseLayout = () => {
  return (
      <UserProvider>
          <Header />

          <div className="overflow-x-hidden min-h-[50vh]">
              <Outlet/>
          </div>
          <Footer />

          <ToastContainer/>
      </UserProvider>
  );
};

export default BaseLayout;
