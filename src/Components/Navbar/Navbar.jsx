import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNavbarLinksOpen, setNavbarLinksOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
    if (!isUserDropdownOpen) {
      setNavbarLinksOpen(false);
    }
  };

  const toggleNavbarLinks = () => {
    setNavbarLinksOpen(!isNavbarLinksOpen);
    if (!isNavbarLinksOpen) {
      setUserDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-black py-2 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span> */}
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-600"
            id="user-menu-button"
            onClick={toggleUserDropdown}
            aria-expanded={isUserDropdownOpen ? "true" : "false"}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 text-gray-400 focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavbarLinksOpen ? "true" : "false"}
            onClick={toggleNavbarLinks}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarLinksOpen ? "" : "hidden"
          }`}
          id="navbar-user"
        >
          <NavbarLinks />
        </div>

        {/* {isUserDropdownOpen && <UserDropdown />} */}

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isUserDropdownOpen ? "" : "hidden"
          }`}
          id="user-dropdown"
        >
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
}

function UserDropdown() {
  return (
    <div
      className="z-50 hidden my-4 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600"
      id="user-dropdown"
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-white">User</span>
        <span className="block text-sm truncate text-gray-400">
          name@user.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="user"
            className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {}}
            href="/"
            className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavbarLinks() {
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
      <li>
        <Link
          to="/"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-500"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block py-2 px-3 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
        >
          About
        </Link>
      </li>
      {/* <li>
        <Link
          href="#"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Contact
        </Link>
      </li> */}
    </ul>
  );
}

export default Navbar;