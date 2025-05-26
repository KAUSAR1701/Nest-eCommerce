import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductItem = () => {
  return (
    <div className="p-2 lg:p-6 border border-[#f2f3f4] rounded-2xl w-fit relative overflow-hidden">
      <div className="absolute px-2.5 py-1 lg:px-5 lg:py-2.5 top-0 left-0 bg-[#F74B81] text-white text-xs rounded-br-3xl">
        <p>Hot</p>
      </div>
      <img src="/productItem1.png" alt="productItem1" className="w-full" />
      <h4 className="font-normal text-xs text-secondary">Snack</h4>
      <h3 className="font-bold text-xs lg:text-base text-primary">
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
  );
};

export default ProductItem;
