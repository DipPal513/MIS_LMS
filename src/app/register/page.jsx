"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { base_url } from "@/utils/URL";
import { useAppContext } from "@/context/AppContext";

const SignUpPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const {isLoading,setIsLoading} = useAppContext();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShow) => !prevShow);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(base_url+"/register", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setIsLoading(false);
      toast.success("Registration successful!");
      console.log("registered data,", response.data);
      router.push("/login");
    } catch (error) {

      setIsLoading(false);
      toast.error(error.response.data.message || "Registration failed. Please try again.");
     
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-0 my-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-lg text-gray-600 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Full Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-lg text-gray-600 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              placeholder="Enter your mobile number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("mobile", { required: true })}
            />
            {errors.mobileNumber && (
              <span className="text-red-500">Mobile Number is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="customInstitutionName"
              className="block text-lg text-gray-600 mb-2"
            >
              Institution Name
            </label>
            <input
              type="text"
              id="customInstitutionName"
              placeholder="Enter your institution name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("custom_institution_name", { required: true })}
            />
            {errors.customInstitutionName && (
              <span className="text-red-500">Institution Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="additionalInfo"
              className="block text-lg text-gray-600 mb-2"
            >
              Additional Info
            </label>
            <textarea
              id="additionalInfo"
              placeholder="Enter any additional information"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("additional_info")}
            />
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-lg text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              })}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 bottom-4 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <span className="text-red-500">
                Password must be at least 8 characters long, contain a letter, a symbol, a number, and a capital letter
              </span>
            )}
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-lg text-gray-600 mb-2"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not match"
              })}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 bottom-4 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-main text-white font-semibold hover:bg-main-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main transition-all"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

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
