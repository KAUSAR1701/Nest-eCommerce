import React from "react";
import Banner from "../components/Shop/Banner";
import Products from "../components/Shop/Products";
import DealsOfDay from "../components/utils/DealsOfDay";
import Subscribe from "../components/utils/Subscribe-bg";

function Shop() {
  return (
    <>
      <Banner />
      <Products />
      <DealsOfDay />
      <Subscribe />
    </>
  );
}

export default Shop;
