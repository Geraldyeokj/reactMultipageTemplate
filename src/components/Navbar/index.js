import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex py-3 px-3">
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/">
                <span>Home</span>
            </Link>
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/assets">
                <span>Landing Page</span>
            </Link>
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/assetTransfer">
                <span>Contact us</span>
            </Link>
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/blogs">
                <span>Blogs</span>
            </Link>
            <Link className="text-slate-700 hover:text-sky-700 px-3" to="/sign-up">
                <span>Sign up</span>
            </Link>
        </div> 
	);
};

export default Navbar;
