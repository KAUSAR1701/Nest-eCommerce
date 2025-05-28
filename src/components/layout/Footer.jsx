import React from "react";
import { CiHeadphones, CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          <div>
            <img src="Logo.png" alt="Logo" />
            <p className="pt-4 pb-8 font-normal text-lg font-primary">
              Awesome grocery store website template
            </p>
            <ul>
              <li>
                <p className="flex pb-2.5 gap-2 font-normal text-base font-primary">
                  <div className="text-brand">
                    <CiLocationOn />
                  </div>
                  Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                  States
                </p>
              </li>
              <li>
                <p className="pb-2.5 flex items-center gap-2 font-normal text-base font-primary">
                  <div className="text-brand">
                    <CiHeadphones />
                  </div>
                  Call Us:(+91) - 540-025-124553
                </p>
              </li>
              <li>
                <p className="pb-2.5 flex items-center gap-2 font-normal text-base font-primary">
                  <div className="text-brand">
                    <IoIosSend />
                  </div>
                  Email:sale@Nest.com
                </p>
              </li>
              <li>
                <p className="pb-11 flex items-center gap-2 font-normal text-base font-primary">
                  <div className="text-brand">
                    <GiAlarmClock />
                  </div>
                  Hours:10:00 - 18:00, Mon - Sat
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="font-normal text-sm text-secondary">Company</h3>
            </div>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link to="/"> About Us</Link>
              </li>
              <li>
                <Link to="/"> Delivery Information </Link>
              </li>
              <li>
                <Link to="/"> Privacy Policy</Link>
              </li>
              <li>
                <Link to="/"> Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/"> Contact Us</Link>
              </li>
              <li>
                <Link to="/"> Support Center</Link>
              </li>
              <li>
                <Link to="/"> Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="font-bold text-2xl text-primary">Account</h3>
            </div>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link to="/"> Sign In</Link>
              </li>
              <li>
                <Link to="/"> View Cart </Link>
              </li>
              <li>
                <Link to="/"> My Wishlist</Link>
              </li>
              <li>
                <Link to="/"> Track My Order</Link>
              </li>
              <li>
                <Link to="/"> Help Ticket</Link>
              </li>
              <li>
                <Link to="/"> Shipping Details</Link>
              </li>
              <li>
                <Link to="/"> Compare products</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="font-bold text-2xl text-primary">Corporate</h3>
            </div>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link to="/"> Become a Vendor</Link>
              </li>
              <li>
                <Link to="/"> Affiliate Program </Link>
              </li>
              <li>
                <Link to="/"> Farm Business</Link>
              </li>
              <li>
                <Link to="/"> Farm Careers</Link>
              </li>
              <li>
                <Link to="/"> Our Suppliers</Link>
              </li>
              <li>
                <Link to="/"> Accessibility</Link>
              </li>
              <li>
                <Link to="/"> Promotions</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="font-bold text-2xl text-primary">Popular</h3>
            </div>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link to="/"> Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link to="/"> Butter and Margarine </Link>
              </li>
              <li>
                <Link to="/"> Eggs Substitutes</Link>
              </li>
              <li>
                <Link to="/"> Marmalades</Link>
              </li>
              <li>
                <Link to="/"> Sour Cream and Dips</Link>
              </li>
              <li>
                <Link to="/"> Tea & Kombucha</Link>
              </li>
              <li>
                <Link to="/"> Cheese</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary mb-5">
              Install App
            </h3>
            <p className="font-normal text-base text-primary">
              From App Store or Google Play
            </p>
            <Link to="/" className="w-24 mt-6 mb-12 flex gap-3">
              <img src="/google-play.png" alt="google-play" />
              <img src="/app-store.png" alt="app-store" />
            </Link>
            <p className="font-normal text-base text-primary mb-5">
              Secured Payment Gateways
            </p>
            <Link to="/">
              <img
                src="/payment-method.png"
                alt="payment-method"
                className="w-52"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-6 border-t border-[#BCE3C9]">
          <p className="font-normal text-xs lg:text-sm text-secondary w-72 hidden md:block">
            © 2024, Nest - HTML Ecommerce Template All rights reserved
          </p>
          <div className="flex gap-1 lg:gap-3.5">
            <Link
              to="tell:1900 - 888"
              className="ml-auto flex items-center gap-2"
            >
              <FaHeadset className="text-3xl text-secondary hidden md:block" />
              <div>
                <p className="text-sm lg:text-2xl text-brand font-bold">
                  1900 - 6666
                </p>
                <p className="text-xs text-secondary font-medium">
                  Working 8:00 - 22:00
                </p>
              </div>
            </Link>
            <Link
              to="tell:1900 - 888"
              className="ml-auto flex items-center gap-2"
            >
              <FaHeadset className="text-3xl text-secondary hidden md:block" />
              <div>
                <p className="text-sm lg:text-2xl text-brand font-bold">
                  1900 - 888
                </p>
                <p className="text-xs text-secondary font-medium">
                  24/7 Support Center
                </p>
              </div>
            </Link>
          </div>
          <div>
            <div className="lg:flex items-center gap-1 lg:gap-3.5">
              <p className="font-bold text-sm lg:text-lg text-primary">
                Follow us
              </p>
              <ul className="flex gap-3">
                <li>
                  <Link
                    to="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="font-normal text-sm text-secondary">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
