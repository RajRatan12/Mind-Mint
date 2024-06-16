import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();

    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/'} className="flex flex-col justify-center cursor-pointer">
                MindMint
            </Link>
            <div className="flex items-center">
                <Link to={`/publish`}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        New
                    </button>
                </Link>
                <Link to={`/signin`}>
                    <button type="button" className="mr-4 text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sign In
                    </button>
                </Link>
                <Link to={`/signup`}>
                    <button type="button" className="mr-4 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sign Up
                    </button>
                </Link>
                <div onClick={() => navigate('/signup')} className="cursor-pointer">
                    <Avatar size={"big"} name="Raj Ratan" />
                </div>
            </div>
        </div>
    );
};