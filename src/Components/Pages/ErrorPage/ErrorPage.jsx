import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center mt-16">
            <div>
                <img className="w-[500px] rounded-xl" src={"https://i.postimg.cc/gjd45131/wordpress-404-error.jpg"} alt="" />
                <div className="mt-8 flex justify-center">
                <Link to="/"><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;