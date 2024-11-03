"use client";
import Link from "next/link";
import {
  FaSearch,
  FaUser,
  FaChevronDown,
  FaTachometerAlt,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const loggedIn = true;

  return (
    <header className="z-10 relative bg-white shadow-md w-full px-4 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/mis-du.jpg" alt="Logo" className="h-12 w-auto sm:h-16" />
        </Link>

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
        <div className="flex items-center space-x-4 sm:space-x-6 text-base sm:text-lg">
          {/* Skills Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <span>Skills</span>
              <FaChevronDown className="text-sm" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform scale-95 group-hover:scale-100">
              <Link href="/skills/skill1" className="block px-4 py-2 hover:bg-gray-100">
                Skill 1
              </Link>
              <Link href="/skills/skill2" className="block px-4 py-2 hover:bg-gray-100">
                Skill 2
              </Link>
              <Link href="/skills/skill3" className="block px-4 py-2 hover:bg-gray-100">
                Skill 3
              </Link>
              <Link href="/skills/skill4" className="block px-4 py-2 hover:bg-gray-100">
                Skill 4
              </Link>
              <Link href="/skills/skill5" className="block px-4 py-2 hover:bg-gray-100">
                Skill 5
              </Link>
            </div>
          </div>

          <Link href="/admission" className="text-gray-700 hover:text-indigo-600">
            Admission
          </Link>

          {/* Online Courses Dropdown */}
          <div className="relative group hidden sm:block">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <span>Online Courses</span>
              <FaChevronDown className="text-sm" />
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col w-56 bg-white shadow-md rounded-md mt-2 py-2 transition duration-300 ease-in-out transform scale-95 group-hover:scale-100">
              <Link href="/online-courses/course1" className="px-4 py-2 hover:bg-gray-100">
                Course 1
              </Link>
              <Link href="/online-courses/course2" className="px-4 py-2 hover:bg-gray-100">
                Course 2
              </Link>
              <Link href="/online-courses/course3" className="px-4 py-2 hover:bg-gray-100">
                Course 3
              </Link>
            </div>
          </div>
        </div>

        {/* Login/Profile Button */}
        {loggedIn ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 text-lg"
            >
              <FaUser className="text-lg" />
              <span>Profile</span>
            </button>

            {/* Profile Dropdown */}
            <div
              className={`absolute -right-16 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ease-in-out ${
                isProfileOpen ? "opacity-100 translate-y-5" : "opacity-0 -translate-y-5"
              }`}
            >
              <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaTachometerAlt className="inline mr-2" /> Dashboard
              </Link>
              <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaUserCircle className="inline mr-2" /> View Profile
              </Link>
              <Link href="/mycourses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaUserCircle className="inline mr-2" /> My Courses
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaCog className="inline mr-2" /> Settings
              </Link>
              <Link href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <FaSignOutAlt className="inline mr-2" /> Logout
              </Link>
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
    </header>
  );
};

export default Header;
