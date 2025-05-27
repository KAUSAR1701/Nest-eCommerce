import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const DealCard = () => {
  return (
    <div className="relative group">
      <div>
        <img src="/DealsBanner1.png" alt="DealsBanner1" className="w-full" />
      </div>
      <div className="w-5/6 absolute transition-all top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1 md:group-hover:-translate-y-3">
        <div className="flex gap-1 md:gap-3.5 justify-center mb-1 md:mb-4">
          <div className="p-1 md:p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Days</p>
          </div>
          <div className="p-1 md:p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Hours</p>
          </div>
          <div className="p-1 md:p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Mins</p>
          </div>
          <div className="p-1 md:p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Sec</p>
          </div>
        </div>
        <div className="bg-white shadow py-3 px-4 md:py-6 md:px-7 rounded-lg">
          <h3 className="font-bold text-xs md::text-base text-primary">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="flex gap-1 lg:gap-3 py-1 lg:py-2.5">
            <ul className="flex text-amber-400 text-xs lg:text-sm">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <p className="font-normal text-xs text-secondary">(5.0)</p>
          </div>
          <p className="font-normal text-xs lg:text-sm text-secondary">
            By <span className="text-brand">NestFood</span>
          </p>
          <div className="flex justify-between pt-6">
            <h4 className="font-bold text-sm lg:text-lg text-brand">
              $28.85{" "}
              <span className="text-xs lg:text-sm text-secondary line-through">
                $32.8
              </span>
            </h4>
            <button className="bg-[#def9ec] flex gap-1 items-center text-brand font-bold text-sm lg:text-lg px-2.5 py-1 lg:px-5 lg:py-2.5 rounded-sm cursor-pointer">
              <IoCartOutline />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
