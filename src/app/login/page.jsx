"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { base_url } from "@/utils/URL";
import { useAppContext } from "@/context/AppProvider";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
    const {setIsLoggedIn,isLoggedIn} = useAppContext();
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(base_url + "/clients/web/login", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const result = response.data;

      // Handle success
      if (response.status === 200) {
        Cookies.set("token", result.data.access_token, {
          expires: result.expires_in / 86400, // Convert seconds to days
        });
        const loggedInUser = await axios
          .get(base_url + "/profile?include=roles", {
            headers: { Authorization: `Bearer ${result.data.access_token}` },
          })
          .then((userData) => {
            Cookies.set("id", userData?.data?.data?.id);
            Cookies.set("name", userData?.data?.data?.name);
          });
        console.log("login data: ", loggedInUser);
        reset();

        toast.success("Login successful!");
        setLoading(false);
        router.push("/");
        setIsLoggedIn(true)
      }
    } catch (error) {
      setIsLoggedIn(false)
      reset();
      setLoading(false);
      console.log(error);
      // Handle error
      if (error.response) {
        // Error from server
        toast.error(error.response.data.message || "Login failed.");
      } else {
        // Network or other errors
        toast.error("Invalid Credentials try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-0">
        {/* Sign In Header */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-main`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
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
              className={`w-full p-3 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-main`}
              {...register("password", { required: "Password is required" })}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 bottom-4 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-main text-white font-semibold hover:bg-main-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main transition-all"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

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
