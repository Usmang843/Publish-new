import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = ({ onSwitch }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");

    if (userData[email]) {
      toast.success("User already exists!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/login");
    } else {
      pushUserData();
    }
  };

  const pushUserData = () => {
    const data = { fname, lname, password };
    const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");
    userData[email] = data;
    sessionStorage.setItem("userData", JSON.stringify(userData));
    toast.success("User registered successfully !", {
      position: "bottom-right",
    });
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl mb-4">News Crud Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-6"
        >
          <label className="block mb-2" htmlFor="fname">
            First Name:
          </label>
          <input
            type="text"
            id="fname"
            className="border rounded w-full py-2 px-3 mb-4"
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />

          <label className="block mb-2" htmlFor="lname">
            Last Name:
          </label>
          <input
            type="text"
            id="lname"
            className="border rounded w-full py-2 px-3 mb-4"
            required
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />

          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-3 mb-4"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border rounded w-full py-2 px-3 mb-4"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          />
        </form>
        <h4 className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In
          </Link>
        </h4>
      </div>
    </>
  );
};

export default SignUp;
