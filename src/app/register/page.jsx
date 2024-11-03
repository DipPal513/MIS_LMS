"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShow) => !prevShow);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-0 my-10">
        
        {/* Sign Up Header */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* DU Registration Number Input */}
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-lg text-gray-600 mb-2">DU Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            placeholder="Enter your DU registration number"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* Department Input */}
        <div className="mb-4">
          <label htmlFor="department" className="block text-lg text-gray-600 mb-2">Department</label>
          <input
            type="text"
            id="department"
            placeholder="Enter your department"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* Hall Input */}
        <div className="mb-4">
          <label htmlFor="hall" className="block text-lg text-gray-600 mb-2">Hall</label>
          <input
            type="text"
            id="hall"
            placeholder="Enter your hall name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* Institutional Email Input */}
        <div className="mb-4">
          <label htmlFor="institutionalEmail" className="block text-lg text-gray-600 mb-2">Institutional Email</label>
          <input
            type="email"
            id="institutionalEmail"
            placeholder="Enter your institutional email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-lg text-gray-600 mb-2">Password</label>
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

        {/* Confirm Password Input */}
        <div className="mb-6 relative">
          <label htmlFor="confirmPassword" className="block text-lg text-gray-600 mb-2">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 bottom-4 cursor-pointer text-gray-500"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-3 rounded-lg bg-main text-white font-semibold hover:bg-main-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main transition-all">
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-main hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
