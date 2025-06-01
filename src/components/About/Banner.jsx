import React from "react";
import BreadCramp from "../utils/BreadCramp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../utils/sliderArrows";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute -right-2 top-25" />,
    prevArrow: <PrevArrow customStyle="absolute -left-2 top-25" />,
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
        <div className="p-5 border-b-2 border-b-[#ECECEC]">
          <BreadCramp />
        </div>
      </div>
      <div className="container">
        <div className="pt-12 grid grid-cols-2 gap-12">
          <div>
            <img
              src="/about-1.png"
              alt="about-1"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-xl">
            <h2 className="pt-12 font-bold text-4xl text-primary">
              Welcome to Nest
            </h2>
            <p className="pt-12 font-normal text-sm text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.<br></br> <br></br>Ius
              ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
              Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
            <div className="pt-12 gap-2">
              <Slider {...settings}>
                <img src="/about-2.png" alt="about-2" />
                <img src="/about-3.png" alt="about-3" />
                <img src="/about-4.png" alt="about-4" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h2 className="pt-12 font-bold text-4xl text-primary">
            What We Provide?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
