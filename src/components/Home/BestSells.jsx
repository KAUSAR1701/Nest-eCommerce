import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import ProductItem from "../utils/ProductItem";
import { NextArrow, PrevArrow } from "../utils/sliderArrows";
const BestSells = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow customStyle="absolute -top-9 top-40 lg:top-50 right-0" />
    ),
    prevArrow: (
      <PrevArrow customStyle="absolute -top-9 top-40 lg:top-50 left-0" />
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row gap-7 items-center xl:items-end">
          <h2 className="sectn_heading">Daily Best Sells</h2>
          <ul className="flex flex-wrap pb-3 font-light text-xs md:text-base text-primary gap-3 md:gap-7 group">
            <li>
              <button className="hover:text-brand cursor-pointer group-hover:scale-120 transition-all">
                featured
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                Popular
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer ">
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center pt-12">
          <div
            className="py-16 px-12 bg-no-repeat bg-center bg-cover rounded-xl w-96"
            style={{ backgroundImage: "url(/BestSells1.png)" }}
          >
            <h2 className="xl:w-60 font-bold text-lg md:text-4xl text-primary xl:pb-24">
              Bring nature into your home
            </h2>
            <div className="pb-28">
              <Link
                to="/"
                className="w-fit flex items-center gap-1 p-1 xl:py-2 xl:px-2.5 rounded-sm bg-brand font-bold text-xs text-white"
              >
                Shop Now <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSells;
