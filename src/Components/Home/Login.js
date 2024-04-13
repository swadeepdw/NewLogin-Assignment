"use client";
import React, { useState } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const onLogin = (e) => {
    // e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="PEMT flex justify-center items-center flex-col">
        <div className="TextPemt">
          <p className="text-3xl text-white">Login Page</p>
          <p className="text-md font-bold text-white">
            The most popular peer to peer
          </p>
        </div>
      </div>
      <div className="LoginStuff flex justify-center items-center flex-col">
        <div className="text-blue-600 text-left w-80 p-3">
          <div className="mb-10">
            <h1 className="font-semibold text-3xl">Hello!</h1>
            <h2 className="text-xl">Welcome</h2>
          </div>
          <div>
            <form onSubmit={onLogin} className="text-blue-600">
              <div className="mb-4 relative">
                <MailOutlineRoundedIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-600" />
                <label
                  className="text-blue-600 absolute left-8  -translate-y-1/2 bg-white px-1"
                  htmlFor="username"
                >
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Enter email Address"
                  className="w-full  border-2 rounded-md border-borderBlue py-2 px-3 focus:outline-none focus:border-blue-600 pl-10"
                />
              </div>
              <div className="mb-6 relative">
                <LockOutlinedIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-600" />
                <label
                  className="text-blue-600 absolute left-8  -translate-y-1/2 bg-white px-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full border-2 rounded-md border-borderBlue py-2 px-3 focus:outline-none focus:border-blue-600 pl-10"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 rounded w-full text-white py-4 px-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div
          onClick={handleBack}
          className="text-center text-blue-600 cursor-pointer"
        >
         Back to landing page
        </div>
      </div>
    </div>
  );
}
