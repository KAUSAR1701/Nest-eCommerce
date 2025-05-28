import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import ProductBanner from "../components/Home/ProductBanner";
import PopulerProducts from "../components/Home/PopulerProducts";
import BestSells from "../components/Home/BestSells";
import DealsOfDay from "../components/Home/DealsOfDay";
import TrendyProducts from "../components/Home/TrendyProducts";
import Subscribe from "../components/Home/Subscribe-bg";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <ProductBanner />
      <PopulerProducts />
      <BestSells />
      <DealsOfDay />
      <TrendyProducts />
      <Subscribe />
    </>
  );
}

export default Home;
