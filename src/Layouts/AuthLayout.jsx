import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-Poppins bg-[#F3F3F3]" >
            <header className="py-3 w-11/12 mx-auto">
  <Navbar></Navbar>
            </header>
      
        <Outlet></Outlet>  
        </div>
    );
};

export default AuthLayout;