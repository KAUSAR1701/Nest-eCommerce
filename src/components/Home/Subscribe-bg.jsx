import React from "react";
import { IoIosSend } from "react-icons/io";

const Subscribe = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div
          className="px-6 py-14 lg:p-16 bg-no-repeat bg-cover rounded-3xl bg-center"
          style={{ backgroundImage: "url('/Subscribe.png')" }}
        >
          <h1 className="font-bold text-lg md:text-2xl lg:text-4xl text-primary max-w-lg">
            Stay home & get your daily needs from our shop
          </h1>
          <p className="pt-5 md:pt-10 pb-5 md:pb-20 text-xs lg:text-lg font-normal text-secondary">
            Start You'r Daily Shopping with{" "}
            <span className="text-brand">Nest Mart</span>
          </p>
          <div className=" bg-white rounded-full max-w-md flex items-center gap-2 pl-2">
            <IoIosSend className="text-4xl text-secondary" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full outline-0"
            />
            <button className="px-3 md:px-8 py-2 md:py-3 bg-brand rounded-full text-white text-base cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 lg:gap-7">
          <div className="pt-3 md:pt-10">
            <div className="flex items-center gap-1 lg:gap-5 bg-[#f4f6fa] py-5 px-7 w-fit rounded-xl">
              <div>
                <img src="icon-1.svg" alt="icon-1" className="w-14" />
              </div>
              <div>
                <h4 className="font-light text-lg text-primary">
                  Best prices & offers
                </h4>
                <p className="font-normal text-sm text-secondary">
                  Orders $50 or more
                </p>
              </div>
            </div>
          </div>
          <div className="pt-3 md:pt-10">
            <div className="flex items-center gap-5 bg-[#f4f6fa] py-5 px-7 w-fit rounded-xl">
              <div>
                <img src="icon-2.svg" alt="icon-2" className="w-14" />
              </div>
              <div>
                <h4 className="font-light text-lg text-primary">
                  Free delivery
                </h4>
                <p className="font-normal text-sm text-secondary">
                  24/7 amazing services
                </p>
              </div>
            </div>
          </div>
          <div className="pt-3 md:pt-10">
            <div className="flex items-center gap-5 bg-[#f4f6fa] py-5 px-7 w-fit rounded-xl">
              <div>
                <img src="icon-3.svg" alt="icon-3" className="w-14" />
              </div>
              <div>
                <h4 className="font-light text-lg text-primary">
                  Great daily deal
                </h4>
                <p className="font-normal text-sm text-secondary">
                  When you sign up
                </p>
              </div>
            </div>
          </div>
          <div className="pt-3 md:pt-10">
            <div className="flex items-center gap-5 bg-[#f4f6fa] py-5 px-7 w-fit rounded-xl">
              <div>
                <img src="icon-4.svg" alt="icon-4" className="w-14" />
              </div>
              <div>
                <h4 className="font-light text-lg text-primary">
                  Wide assortment
                </h4>
                <p className="font-normal text-sm text-secondary">
                  Mega Discounts
                </p>
              </div>
            </div>
          </div>
          <div className="pt-3 md:pt-10">
            <div className="flex items-center gap-5 bg-[#f4f6fa] py-5 px-7 w-fit rounded-xl">
              <div>
                <img src="icon-5.svg" alt="icon-5" className="w-14" />
              </div>
              <div>
                <h4 className="font-light text-lg text-primary">
                  Easy returns
                </h4>
                <p className="font-normal text-sm text-secondary">
                  Within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
