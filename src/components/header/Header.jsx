import Link from "next/link";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full px-4 sm:px-8 lg:px-16">
      <div className="flex items-center justify-between py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/mis-du.jpg" alt="Logo" className="h-16 w-auto" />
          
        </div>

        {/* Search Box */}
        <div className="flex-1 max-w-xs mx-4 sm:mx-6 lg:mx-10 relative hidden sm:flex border rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-lg  border-gray-300 "
          />
          <div className="rounded-r-lg bg-main text-white p-3">
            <FaSearch />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <span>Services</span> <span>▼</span>
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-2 py-2">
              <Link href="/service1" className="px-4 py-2 hover:bg-gray-100">
                Service 1
              </Link>
              <Link href="/service2" className="px-4 py-2 hover:bg-gray-100">
                Service 2
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <span>About Us</span> <span>▼</span>
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-2 py-2">
              <Link href="/team" className="px-4 py-2 hover:bg-gray-100">
                Our Team
              </Link>
              <Link href="/mission" className="px-4 py-2 hover:bg-gray-100">
                Our Mission
              </Link>
            </div>
          </div>

          {/* Profile Menu with Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <FaUser className="text-lg" />
              <span>Profile</span> <span>▼</span>
            </button>
            <div className="absolute right-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-2 py-2">
              <Link href="/profile" className="px-4 py-2 hover:bg-gray-100">
                My Profile
              </Link>
              <Link href="/settings" className="px-4 py-2 hover:bg-gray-100">
                Settings
              </Link>
              <Link href="/logout" className="px-4 py-2 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div>
          <Link
            href="/login"
            className="py-2 px-4 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
