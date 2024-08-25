import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-poppins">
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;