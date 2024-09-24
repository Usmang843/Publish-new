import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Signed up!");
  };

  return (
    <>
      <div className="flex flex-col items-center h-96">
        <h2 className="text-2xl mb-4 mt-20" >Signup</h2>
        <form
          className="bg-white p-6 rounded shadow-md w-80"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Signup
          </button>
          <Link to='/login' className="mt-4 text-blue-500">
            Already have an account?
            </Link>
        </form>
        <div className="mt-20"></div>
      </div>
    </>
  );
};

export default SignUp;
