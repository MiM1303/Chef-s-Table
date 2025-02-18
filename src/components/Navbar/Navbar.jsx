import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="px-0 btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="font-normal text-[#150B2BB2] menu menu-sm dropdown-content mt-3 z-[1] md:p-2 shadow bg-base-100 rounded-box w-48">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                </div>
                <a className="btn px-2 btn-ghost text-xl md:text-3xl font-bold text-[#150B2B]">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal md:px-1 text-lg text-[#150B2BB2] ">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="relative text-xs md:text-base hidden md:block">
                    <span className="absolute top-1/3 left-3"><CiSearch /></span>
                    <input type="text" placeholder="Search" className="input input-bordered w-8 md:w-auto  pl-8" /> 
                </div>
                <div className="text-base md:text-2xl rounded-full bg-[#0BE58A] p-2 md:p-3">
                    <FaRegUserCircle />
                </div>

            </div>
        </div>
    );
};

export default Navbar;