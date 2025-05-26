import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router";
import CategoryItems from "./CategoryItems";
import { NextArrow, PrevArrow } from "../utils/sliderArrows";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute -top-9 md:-top-15 right-0" />,
    prevArrow: <PrevArrow customStyle="absolute -top-9 md:-top-15 right-16" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt-12 pb-9 md:pt-14 md:pb-11">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-7 items-center xl:items-end">
          <h2 className="sectn_heading">Featured Categories</h2>
          <ul className="flex flex-wrap pb-3 font-light text-xs md:text-base text-primary gap-3 md:gap-7">
            <li>
              <Link to="/" className="hover:text-brand">
                Cake & Milk
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Coffes & Teas
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Pet Foods
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Vegetables
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-11">
          <Slider {...settings}>
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
