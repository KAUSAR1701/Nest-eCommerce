import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import ProductBanner from "../components/Home/ProductBanner";
import PopulerProducts from "../components/Home/PopulerProducts";
import BestSells from "../components/Home/BestSells";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <ProductBanner />
      <PopulerProducts />
      <BestSells />
    </>
  );
}

export default Home;
