import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");

    if (!userData[email]) {
      toast.info("User doesn't exist!", {
        position: "bottom-right",
      });
    } else if (userData[email].password === password) {
      sessionStorage.setItem("currentloggedin", email);
      navigate("/");
    } else {
      toast.error("Wrong Password!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl mb-4">News Crud Login</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
                <label className="block mb-2" htmlFor="email">Email:</label>
                <input type="email" id="email" className="border rounded w-full py-2 px-3 mb-4" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label className="block mb-2" htmlFor="password">Password:</label>
                <input type="password" id="password" className="border rounded w-full py-2 px-3 mb-4" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <input type="submit" className="bg-blue-500 text-white py-2 px-4 rounded" />
            </form>
            <h4 className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></h4>
        </div>
    </>
  );
};

export default Login;
