import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import ProductItem from "../utils/ProductItem";

const Products = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <p>We found 29 items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] shadow-xs rounded">
            <AiTwotoneAppstore />
            <p>Show: </p>
            <select>
              <option value="">50</option>
              <option value="">100</option>
              <option value="">150</option>
              <option value="">200</option>
            </select>
          </div>
        </div>
        <div className="pt-12 flex grid grid-cols-5 gap-6">
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

export default Products;
