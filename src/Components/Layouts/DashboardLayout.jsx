import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex gap-10">
            <div className="flex flex-col w-[20%] p-10 shadow-lg space-y-8
             text-3xl font-semibold">
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/dashboard/profile'>Profile</Link>
                <Link to='/dashboard/profileEdit'>Profile Edit</Link>
            </div>
            <div className="w-[80%] flex justify-center items-center">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;