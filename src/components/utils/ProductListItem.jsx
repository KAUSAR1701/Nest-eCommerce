import React from "react";
import { FaStar } from "react-icons/fa";

const ProductListItem = () => {
  return (
    <div className="flex">
      <img src="productItem1.png" alt="productItem1" className="max-w-28" />
      <div>
        <h3 className="font-bold text-xs lg:text-base text-primary">
          Nestle Original Coffee-Mate Coffee Creamer
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
        <h4 className="font-bold text-sm lg:text-lg text-brand">
          $32.85{" "}
          <span className="text-xs lg:text-sm text-secondary line-through">
            $33.8
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ProductListItem;
