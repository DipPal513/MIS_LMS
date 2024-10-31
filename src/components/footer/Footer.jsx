import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <p className="text-gray-400">
            We are dedicated to delivering the best services to our clients. Follow us on social media to stay updated.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" className="hover:text-blue-500">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-blue-600">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">1234 Street Name, City, State, 56789</p>
          <p className="text-gray-400 mt-2">Phone: (123) 456-7890</p>
          <p className="text-gray-400 mt-2">Email: info@company.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
