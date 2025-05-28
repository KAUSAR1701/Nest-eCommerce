import React from "react";
import ProductListItem from "../utils/ProductListItem";

const TrendyProducts = () => {
  return (
    <section className="pt-2 pb-2 lg:pt-12 lg:pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <h2 className="font-bold text-2xl text-primary pb-4 border-b border-[#ececec] relative after:absolute after:w-20 after:h-0.5 after:bg-[#bce3c9] after:bottom-0 after:left-0">
              Top Selling
            </h2>
            <div className="flex flex-col gap-5 mt-8">
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-primary pb-4 border-b border-[#ececec] relative after:absolute after:w-20 after:h-0.5 after:bg-[#bce3c9] after:bottom-0 after:left-0">
              Trending Products
            </h2>
            <div className="flex flex-col gap-5 mt-8">
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-primary pb-4 border-b border-[#ececec] relative after:absolute after:w-20 after:h-0.5 after:bg-[#bce3c9] after:bottom-0 after:left-0">
              Recently added
            </h2>
            <div className="flex flex-col gap-5 mt-8">
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-primary pb-4 border-b border-[#ececec] relative after:absolute after:w-20 after:h-0.5 after:bg-[#bce3c9] after:bottom-0 after:left-0">
              Top Rated
            </h2>
            <div className="flex flex-col gap-5 mt-8">
              <ProductListItem />
              <ProductListItem />
              <ProductListItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyProducts;
