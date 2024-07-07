import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between shadow-md p-7">
            <h1 className="text-4xl font-bold">Amazon</h1>
            <nav className="flex gap-6 tex-3xl font-medium">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='dashboard'>Dashboard</NavLink>
            </nav>
        </div>
    );
};

export default Header;