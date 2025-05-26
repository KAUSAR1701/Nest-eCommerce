import React from "react";
import ProductItem from "../utils/ProductItem";

const PopulerProducts = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row gap-7 items-center xl:items-end">
          <h2 className="sectn_heading">Popular Products</h2>
          <ul className="flex flex-wrap pb-3 font-light text-xs md:text-base text-primary gap-3 md:gap-7 group">
            <li>
              <button className="hover:text-brand cursor-pointer group-hover:scale-120 transition-all">
                All
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Milks & Dairies
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Coffes & Teas
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Pet Foods
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Meats
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Vegetables
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Fruits
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-5 lg:pt-11 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-2.5 lg:gap-x-6 lg:gap-y-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
};

export default PopulerProducts;
