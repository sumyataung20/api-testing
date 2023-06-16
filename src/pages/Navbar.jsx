import React from "react";
import {AiFillContacts} from "react-icons/ai";
const Navbar = () => {
    return(
        <nav className="flex justify-between items-center bg-blue-50 px-10 shadow-sm my-2 py-5">
            <h1 className="fkex items-center gap-3">
                <AiFillContacts className="text-2xl text-yellow-500"/> <span className="font-bold text-blue-800"></span>ReContact</h1>
            <div className="flex items-center gap-5">
                <div className="">
                    <p>Su Myat Aung</p>
                    <small>myathsu703@gmail.com</small>
                </div>
                <button className="bg-gray-400 px-3 py-1 rounded text-white cursor-pointer">Log out</button>
            </div>
        </nav>
    )
}

export default Navbar;