import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";
import { useNavigate } from "react-router-dom";
const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [phone, setPhone] = useState("");
    const [register] = useRegisterMutation();
    const navigate = useNavigate(); 
    const registerHandler = async(e) => {
        e.preventDefault();
        const user = {name, email, password, confirmpassword, phone};
        const {data} = await register(user);
        if(data?.success) navigate("/login")
        // setError(data?.error?.data?.errors);
        console.log(data)
      
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={registerHandler} className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded">
                <h1 className="text-blue-500 text0xl font-bold">Register Account</h1>
                <input type="text" placeholder="Enter your Username" className="w-72 outline-none border-b-2 p-3 bg-transparent" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Enter your Email" className="w-72 outline-none border-b-2 p-3 bg-transparent" value={email} onChange={e => setEmail(e.target.value)}  />
                <input type="password" placeholder="Enter your Password" className="w-72 outline-none border-b-2 p-3 bg-transparent" value={password} onChange={e => setPassword(e.target.value)}  />
                <input type="password" placeholder="Enter your ConfirmPassword" className="w-72 outline-none border-b-2 p-3 bg-transparent" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)} />
                <input type="phone" placeholder="Enter your Phone" className="w-72 outline-none border-b-2 p-3 bg-transparent" value={phone} onChange={e => setPhone(e.target.value)}  />
                <div>
                <small className="text-xs mb-8">Already have an account? <Link to="/login"><span className="text-green-500 cursor-pointer">Login Account</span></Link></small>
                <button type="submit" className="bg-blue-400 px-10 py-2 mt-5">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;