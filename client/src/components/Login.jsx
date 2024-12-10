
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const endpoint = state === "Login" ? "/api/user/login" : "/api/user/register";
      const { data } = await axios.post(`${backendUrl}${endpoint}`, formData);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        toast.success(state === "Login" ? "Login successful!" : "Registration successful!");
      } else {
        toast.error(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error. Please try again.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500 max-w-md w-full"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center mb-5">
          {state === "Login" ? "Welcome Back! Please sign in to continue." : "Create your account to get started."}
        </p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <FontAwesomeIcon icon={faUser} />
            <input
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="outline-none text-sm flex-grow"
              type="text"
              placeholder="Full Name"
              required
              aria-label="Full Name"
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="outline-none text-sm flex-grow"
            type="email"
            placeholder="Email ID"
            required
            aria-label="Email ID"
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <FontAwesomeIcon icon={faLock} />
          <input
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="outline-none text-sm flex-grow"
            type="password"
            placeholder="Enter Password"
            required
            aria-label="Password"
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        <p className="mt-5 text-center">
          {state === "Login" ? (
            <>
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => setState("Sign Up")}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={() => setState("Login")}>
                Sign In
              </span>
            </>
          )}
        </p>

        <FontAwesomeIcon
          className="absolute top-8 right-8 cursor-pointer hover:bg-red-400 rounded-md p-1"
          onClick={() => setShowLogin(false)}
          icon={faX}
        />
      </form>
    </div>
  );
};

export default Login;
