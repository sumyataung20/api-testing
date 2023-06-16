import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded">
                <h1 className="text-blue-500 text0xl font-bold">Login Account</h1>
                <input type="text" placeholder="Enter your Email" className="w-72 outline-none border-b-2 p-3 bg-transparent" />
                <input type="text" placeholder="Enter your Password" className="w-72 outline-none border-b-2 p-3 bg-transparent" />
                <div>
                <small className="text-xs mb-8">Do not have an account?
                <Link to="/register"> <span className="text-green-500 cursor-pointer">Register Account</span></Link></small>
                <button type="submit" className="bg-green-400 px-10 py-2 mt-5">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;