"use client";
import { useEffect } from "react";
import { Collapse } from "flowbite";
import {
  CollapseNavbar,
  HandleNavbarScroll,
  handleScrollToSection,
} from "./Controller";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const MainNavbar = () => {
  useEffect(() => {
    CollapseNavbar(Collapse);

    window.addEventListener("scroll", HandleNavbarScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", HandleNavbarScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="transition-all bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div
        id="navContent"
        className="transition-all max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-brown-5 hover:bg-brown-7 focus:outline-none focus:ring-4 focus:ring-brown-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  "
          >
            Download CV
          </button>
          <button
            id="triggerEl"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none  dark:text-gray-400 "
          >
            <span className="sr-only">Open main menu</span>
            <div id="hamburgerMenuIcon" style={{ display: "block" }}>
              <RxHamburgerMenu size={25} />
            </div>
            <div id="closeIcon" style={{ display: "none" }}>
              <IoClose size={30} id="closeIcon" />
            </div>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="targetEl"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse ">
            <li>
              <a
                href="#home"
                onClick={handleScrollToSection}
                className="block py-2 px-3 rounded md:border-0 text-gray-900  hover:bg-gray-200/30  md:hover:text-brown-7 md:p-0 dark:text-white md:dark:hover:text-brown-5 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleScrollToSection}
                className="block py-2 px-3 rounded  md:border-0 text-gray-900  hover:bg-gray-200/30  md:hover:text-brown-7 md:p-0 dark:text-white md:dark:hover:text-brown-5 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-200/30 md:hover:bg-transparent md:border-0 md:hover:text-brown-7 md:p-0 dark:text-white md:dark:hover:text-brown-5 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-200/30 md:hover:bg-transparent md:border-0 md:hover:text-brown-7 md:p-0 dark:text-white md:dark:hover:text-brown-5 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-200/30 md:hover:bg-transparent md:border-0 md:hover:text-brown-7 md:p-0 dark:text-white md:dark:hover:text-brown-5 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
