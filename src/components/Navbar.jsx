import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-2 sm:px-4 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown max-[1370px]:block hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <span>Menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/committee">Committee</Link>
            </li>
            <li>
              <Link to="/call-for-papers">Call for Papers</Link>
            </li>
            <li>
              <Link to="/publication">Publication</Link>
            </li>
            <li>
              <Link to="/submission">Submission</Link>
            </li>
            <li>
              <Link to="/important-dates">Important Dates</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/accommodation">Accommodation</Link>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden min-[1371px]:flex">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
          <li>
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="hover:opacity-70 transition-opacity"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/committee"
              className="hover:opacity-70 transition-opacity"
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              to="/call-for-papers"
              className="hover:opacity-70 transition-opacity"
            >
              Call for Papers
            </Link>
          </li>
          <li>
            <Link
              to="/publication"
              className="hover:opacity-70 transition-opacity"
            >
              Publication
            </Link>
          </li>
          <li>
            <Link
              to="/submission"
              className="hover:opacity-70 transition-opacity"
            >
              Submission
            </Link>
          </li>
          <li>
            <Link
              to="/important-dates"
              className="hover:opacity-70 transition-opacity"
            >
              Important Dates
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="hover:opacity-70 transition-opacity"
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              to="/accommodation"
              className="hover:opacity-70 transition-opacity"
            >
              Accommodation
            </Link>
          </li>
          <li>
            <Link
              to="/downloads"
              className="hover:opacity-70 transition-opacity"
            >
              Downloads
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:opacity-70 transition-opacity">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
