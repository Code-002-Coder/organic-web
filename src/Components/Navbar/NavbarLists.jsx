import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Contact from "../Contact/Contact";

const NavbarLists = () => {
  return (
    <>
      <div class="hidden md:block">
        <div class="ml-10 items-baseline custom-box">
          <a
            href="#"
            class="nav-link text-gray-700 font-medium"
            onclick="showPage('home')"
          >
            Home
          </a>
          <a
            href="#"
            class="nav-link text-gray-700 font-medium"
            onclick="showPage('home')"
          >
            About
          </a>
          <a
            href="#"
            class="nav-link text-gray-700 font-medium"
            onclick="showPage('products')"
          >
            Products
          </a>
          <a
            href="/src/Components/Contact/Contact.jsx"
            class="nav-link - text-gray-700 font-medium"
            onclick="showPage('Contact')"
          >
            Contact
          </a>
          <a
            href="#"
            class="nav-link text-gray-700 font-medium"
            onclick="showPage('help')"
          >
            Servies
          </a>
          {/* <a href="#" class="btn-primary text-white px-4 py-2 rounded-lg font-medium" onclick="showPage('register')">Sign Up</a> */}
        </div>
      </div>
    </>
  );
};

export default NavbarLists;
