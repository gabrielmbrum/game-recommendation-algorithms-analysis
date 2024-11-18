import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Game Recommender Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/KNNPage"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              KNN
            </Link>
            <Link
              to="/SVDPage"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              SVD
            </Link>
            <Link
              to="/ALSPage"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              ALS
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none hover:text-blue-500"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;