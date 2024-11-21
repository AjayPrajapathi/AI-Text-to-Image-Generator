import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCross,
  faEnvelope,
  faLock,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
 const {setShowLogin}=useContext(AppContext)

  useEffect(()=>{
    document.body.style.overflow='hidden'

    return ()=>{
      document.body.style.overflow='unset';
    }

  })

  return (
    <div className="fixed top-0 left-0 bottom-0  right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-cnter text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome Back Please Sign in to continue</p>
        {state !== "Login" && (
          <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5">
            {/* <img src={assets} alt=''/> */}
            <FontAwesomeIcon icon={faUser} />

            <input
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-4">
          {/* <img src={assets} alt=''/> */}
          <FontAwesomeIcon icon={faEnvelope} />

          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
          />
        </div>
        <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-4">
          {/* <img src={assets} alt=''/> */}
          <FontAwesomeIcon icon={faLock} />

          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={()=>setState('Login')}>Sign In</span>
          </p>
        )}

        <FontAwesomeIcon
          className=" absolute top-8 right-8  cursor pointer hover:bg-red-400  rounded-md p-1"
          onClick={()=>setShowLogin(false)}
          icon={faX}
        />
      </form>
    </div>
  );
};

export default Login;
