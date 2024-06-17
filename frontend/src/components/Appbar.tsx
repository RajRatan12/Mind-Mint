import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();

    return (
        <div className="border-b flex justify-between px-10 py-4 ">
            <Link to={'/'} className="flex flex-col justify-center cursor-pointer">
                MindMint
            </Link>

                <div className="flex items-center gap-4">
                 
                <Link to={`/signin`}>
                <button className="px-8 py-2 rounded-md bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Sign In
                </button>
                </Link>
                <Link to={`/signup`}>
                <button className="px-8 py-2 rounded-md bg-black text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
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