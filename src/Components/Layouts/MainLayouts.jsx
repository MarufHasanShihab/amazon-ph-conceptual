import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";


const MainLayouts = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            <Header></Header>
            {
                isLoading ? <Spinner></Spinner> : <div className="min-h-screen p-8">
                <Outlet></Outlet>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;