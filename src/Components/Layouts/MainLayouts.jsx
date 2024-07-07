import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen p-8">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;