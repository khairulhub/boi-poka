import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default root;