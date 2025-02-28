"use client";

import { useAppContext } from "@/context/AppProvider";

import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaCog,
  FaSearch,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUser,
  FaUserCircle
} from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {isLoggedIn,setIsLoggedIn,isLoading} = useAppContext();
  console.log("the user is ",isLoggedIn)

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("id");
    router.push("/login");
    toast.success("Logged out...");
    setIsLoggedIn(false);
  };
  return (
    <header className="z-10 relative bg-white  w-full px-4 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/mis-du.jpg" alt="Logo" className="h-12 w-auto sm:h-16" />
        </Link>

        {/* Hamburger Menu Button */}
        {/* <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-xl" />
        </button> */}

        {/* Search Box (hidden on mobile) */}
        <div className="hidden sm:flex flex-1 max-w-xs mx-4 sm:mx-6 lg:mx-10 relative border rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-lg border-gray-300"
          />
          <div className="rounded-r-lg bg-main text-white p-3">
            <FaSearch />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="menu hidden sm:flex items-center space-x-4">
          <li>
            <Link
              className="uppercase hover:text-blue-700 transition duration-200 font-semibold"
              href={"#skills"}
            >
              skill Development
            </Link>
          </li>
          <li>
            <Link
              className="uppercase hover:text-blue-700 transition duration-200 font-semibold"
              href={"#academy"}
            >
              Academy
            </Link>
          </li>
        </ul>

        {/* Login/Profile Button */}

        {isLoggedIn ? (

        {isLoading ? <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
:isLoggedIn ? (

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 text-lg bg-white p-3 shadow-2xl rounded-full border-gray-300 border"
            >
              <FaUser className="text-lg" />
            </button>

            {/* Profile Dropdown */}
            <div
              className={`absolute -right-16 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ease-in-out ${
                isProfileOpen
                  ? "opacity-100 block translate-y-5"
                  : "opacity-0 hidden -translate-y-5"
              }`}
            >
              <Link
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaTachometerAlt className="inline mr-2" /> Dashboard
              </Link>
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaUserCircle className="inline mr-2" /> View Profile
              </Link>
              <Link
                href="/mycourses"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaUserCircle className="inline mr-2" /> My Courses
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaCog className="inline mr-2" /> Settings
              </Link>
              <button
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="inline mr-2" /> Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-4 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
          >
            Login
          </Link>
        )}
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md mt-2 rounded-md">
          <div className="flex flex-col p-4">
            <Link
              href="/admission"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Admission
            </Link>
            <Link
              href="/skills/skill1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Skill 1
            </Link>
            <Link
              href="/skills/skill2"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Skill 2
            </Link>
            <Link
              href="/skills/skill3"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Skill 3
            </Link>
            <Link
              href="/skills/skill4"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Skill 4
            </Link>
            <Link
              href="/skills/skill5"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Skill 5
            </Link>
            <Link
              href="/online-courses/course1"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Course 1
            </Link>
            <Link
              href="/online-courses/course2"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Course 2
            </Link>
            <Link
              href="/online-courses/course3"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Course 3
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
