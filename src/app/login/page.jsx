"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-0">
        
        {/* Sign In Header */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm text-gray-600 mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 bottom-4 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Sign In Button */}
        <button className="w-full py-3 rounded-lg bg-main text-white font-semibold hover:bg-main-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main transition-all">
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-main hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
