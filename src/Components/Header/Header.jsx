import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between shadow-md p-7">
            <h1 className="text-4xl font-bold">Amazon</h1>
            <nav className="flex gap-6 tex-3xl font-medium">
                <NavLink className="p-[10px] rounded-lg" to='/' >Home</NavLink>
                <NavLink className="p-[10px] rounded-lg" to='/products'>Products</NavLink>
                <NavLink className="p-[10px] rounded-lg" to='dashboard'>Dashboard</NavLink>
            </nav>
        </div>
    );
};

export default Header;