import React from "react";
import ProductBannerItem from "./ProductBannerItem";

const ProductBanner = () => {
  return (
    <section className="pb-12">
      <div className="container flex flex-col md:flex-row gap-6">
        <ProductBannerItem bg="url(/productBanner1.png)" url="/">
          Everyday Fresh & Clean with our products
        </ProductBannerItem>
        <ProductBannerItem bg="url(/productBanner2.png)" url="/">
          Make your Breakfast Healthy and Easy
        </ProductBannerItem>
        <ProductBannerItem bg="url(/productBanner3.png)" url="/">
          The best Organic Products Online
        </ProductBannerItem>
      </div>
    </section>
  );
};

export default ProductBanner;
