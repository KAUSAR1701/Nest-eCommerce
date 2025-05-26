import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductBannerItem = ({ bg, url, children }) => {
  return (
    <div
      className="p-10 xl:py-20 xl:px-12 bg-no-repeat bg-center bg-cover rounded-xl w-full"
      style={{ backgroundImage: `${bg}` }}
    >
      <h2 className="xl:w-62 font-bold text-lg md:text-2xl text-primary pb-4">
        {children}
      </h2>
      <Link
        to={url}
        className="w-fit flex items-center gap-1 p-1 xl:py-2 xl:px-2.5 rounded-sm bg-brand font-bold text-xs text-white"
      >
        Shop Now <FaArrowRight />
      </Link>
    </div>
  );
};

export default ProductBannerItem;
