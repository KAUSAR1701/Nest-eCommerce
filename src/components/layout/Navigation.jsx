import React, { useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaFireAlt,
  FaSearch,
  FaShoppingCart,
  FaWindowClose,
} from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiCategoryAlt, BiGitCompare } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiSelfLove } from "react-icons/gi";

import { Link } from "react-router";

const Navigation = () => {
  const [show, setShow] = useState();
  const [sidebar, setSidebar] = useState();
  return (
    <header className="relative shadow-sm">
      {/**Top Part */}
      <div className="container">
        <div className="hidden lg:flex p-0 shadow-xs items-center justify-between">
          <div>
            <ul>
              <li className="flex gap-3 items-center">
                <p className="pr-2 text-secondary font-medium lg:text-xs lg:border-r-1">
                  About Us
                </p>
                <p className="pr-2 text-secondary font-medium lg:text-xs lg:border-r-1">
                  My Account
                </p>
                <p className="pr-2 text-secondary font-medium lg:text-xs lg:border-r-1">
                  Wishlist
                </p>
                <p className=" text-secondary font-medium md:text-xs">
                  Order Tracking
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary font-medium text-xs">
              * Supper Value Deals - Save more with coupons
            </p>
          </div>
          <div className="flex">
            <p className="text-secondary font-medium text-xs lg:border-r-1 pr-2">
              Need help? Call Us:+ 1800 900
            </p>
            <select
              name=""
              id=""
              className="text-secondary font-medium text-xs"
            >
              <option value="">English </option>
            </select>
            <select
              name=""
              id=""
              className="text-secondary font-medium text-xs"
            >
              <option value="">USD </option>
            </select>
          </div>
        </div>
      </div>
      {/**Top Part End */}
      {/*Header Top Part*/}
      <div className="container">
        <div className="flex justify-between items-center py-8 gap-8">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden text-2xl text-primary"
          >
            <FaBars className="cursor-pointer" />
          </button>
          <Link to="/" className="w-32 lg:w-auto">
            <img src="/Logo.png" alt="Logo" className="w-full" />
          </Link>
          <div className="border-2 border-brand p-2 lg:p-5 rounded w-full max-w-64 lg:max-w-[700px] hidden md:flex items-center">
            <select
              name=""
              id=""
              className="pr-3.5 border-r-2 border-slate-300 text-primary hidden lg:block"
            >
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items"
              className="px-3.5 w-full lg:w-2/3 outline-0"
            />
            <FaSearch className="ml-auto" />
          </div>
          <div>
            <ul className="flex gap-6 lg:gap-8 text-sm">
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-brand text-white flex text-xs md:text-sm items-center justify-center absolute -top-2 md:-top-2 -right-2 md:right-16">
                    0
                  </span>
                  <BiGitCompare className="text-2xl lg:text-3xl text-primary" />
                  <span className="hidden md:block">Compare</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-brand text-white flex text-xs md:text-sm items-center justify-center absolute -top-2 md:-top-2 -right-2 md:right-12">
                    0
                  </span>
                  <GiSelfLove className="text-2xl lg:text-3xl text-primary" />
                  <span className="hidden md:block">Wishlist</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-brand text-white flex text-xs md:text-sm items-center justify-center absolute -top-2 md:-top-2 -right-2 md:right-6">
                    0
                  </span>
                  <FaShoppingCart className="text-2xl lg:text-3xl text-primary" />
                  <span className="hidden md:block">Cart</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <MdOutlineManageAccounts className="text-2xl lg:text-3xl text-primary" />
                  <span className="hidden md:block">Account</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Mainmenu mobile view */}
          <nav
            className={`w-full h-screen bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 transition-all z-50 ${sidebar ? "-translate-x-0" : "-translate-x-full"} `}
          >
            <div className="w-[95%] h-full bg-white overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#ececec] pb-4 mb-4 px-4">
                <Link to="/" className="w-32">
                  <img src="/Logo.png" alt="Logo" />
                </Link>
                <button
                  onClick={() => setSidebar(false)}
                  className="text-2xl text-brand cursor-pointer"
                >
                  <FaWindowClose />
                </button>
              </div>
              <div className="px-4 flex flex-col gap-4">
                <div className="border-2 border-brand p-2 lg:p-5 rounded w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Search for items"
                    className="px-3.5 w-full lg:w-2/3 outline-0"
                  />
                  <FaSearch className="ml-auto" />
                </div>
                <ul className=" font-bold trxt-primary text-base">
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Home{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/About"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      About
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/Shop"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Shop{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Vendors{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Mega menu{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      to="/"
                      className="block border-b border-[#ececec] py-2 hover:text-brand transition"
                    >
                      Pages{" "}
                    </Link>
                  </li>
                </ul>
                <Link
                  to="tell:1900 - 888"
                  className="ml-auto flex items-center gap-2"
                >
                  <TfiHeadphoneAlt />
                  <div>
                    <p className="text-2xl text-brand font-bold">1900 - 888</p>
                    <p className="text-sm text-secondary font-medium">
                      24/7 Support Center
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Main menu desktop view */}
      <nav className="hidden md:block py-6 border-t border-[#ececec]">
        <div className="container flex items-center gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="px-3 py-2 xl:px-6 xl:py-3 bg-brand rounded-md text-white text-xs xl:text-base font-bold flex items-center gap-2 cursor-pointer"
            >
              <BiCategoryAlt />
              Browse All Categories <FaChevronDown />
            </h3>

            {show && (
              <div className="w-md rounded-lg absolute bg-white top-15 xl:top-20 left-0 p-7 border-1 border-brand grid grid-cols-2 gap-6 z-50">
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-1.svg" alt="category-1" className="w-6" />
                  <p>Milks and Dairies</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-2.svg" alt="category-2" className="w-6" />
                  <p>Wines & Drinks</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-3.svg" alt="category-3" className="w-6" />
                  <p>Clothing & beauty</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-4.svg" alt="category-4" className="w-6" />
                  <p>Fresh Seafood</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-5.svg" alt="category-5" className="w-6" />
                  <p>Pet Foods & Toy</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-6.svg" alt="category-6" className="w-6" />
                  <p>Fast food</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-7.svg" alt="category-7" className="w-6" />
                  <p>Baking material</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-8.svg" alt="category-8" className="w-6" />
                  <p>Vegetables</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img src="/category-9.svg" alt="category-9" className="w-6" />
                  <p>Fresh Fruit</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-primary cursor-pointer shadow py-3 px-2 hover:text-brand hover:border-brand hover:shadow-brand rounded">
                  <img
                    src="/category-10.svg"
                    alt="category-1"
                    className="w-6"
                  />
                  <p>Bread and Juice</p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex gap-2 lg:gap-5 font-bold trxt-primary text-sm xl:text-lg">
            <li className="flex gap-1 items-center">
              <FaFireAlt className="text-brand hidden xl:block" />
              <Link
                to="/"
                className="hover:text-brand transition hidden xl:block"
              >
                Deals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-brand transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="hover:text-brand transition">
                Shop{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Vendors{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Mega menu{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Blog{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Pages{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="tell:1900 - 888"
            className="ml-auto flex items-center gap-2"
          >
            <TfiHeadphoneAlt />
            <div>
              <p className="text-sm xl:text-2xl text-brand font-bold">
                1900 - 888
              </p>
              <p className="text-xs xl:text-sm text-secondary font-medium">
                24/7 Support Center
              </p>
            </div>
          </Link>
        </div>
      </nav>
      {/* Main menu */}
    </header>
  );
};

export default Navigation;
