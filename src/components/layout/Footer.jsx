import React from "react";
import { CiHeadphones, CiLocationOn } from "react-icons/ci";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-6 gap-10">
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
                <p className="pb-2.5 flex items-center gap-2 font-normal text-base font-primary">
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
      </div>
    </footer>
  );
}

export default Footer;
