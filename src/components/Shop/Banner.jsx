import React from "react";
import { IoMdClose } from "react-icons/io";
import BreadCramp from "../utils/BreadCramp";

const Banner = () => {
  return (
    <section className="pt-8 pb-12">
      <div className="container">
        <div className="bg-[url(/ShopBanner.png)] bg-no-repeat bg-center p-20 rounded-3xl flex items-center justify-between">
          <div>
            <BreadCramp />
          </div>
          <div className="flex gap-5">
            <div className="bg-white py-2 px-4  rounded-3xl flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <IoMdClose className="text-secondary" />
                <h3 className="font-bold text-brand hover hover:text-yellow-400">
                  Cabbage
                </h3>
              </div>
            </div>
            <div className="bg-white py-2 px-4  rounded-3xl flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <IoMdClose className="text-secondary" />
                <h3 className="font-bold text-brand hover hover:text-yellow-400">
                  Broccoli
                </h3>
              </div>
            </div>
            <div className="bg-white py-2 px-4  rounded-3xl flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <IoMdClose className="text-secondary" />
                <h3 className="font-bold text-brand hover hover:text-yellow-400">
                  Artichoke
                </h3>
              </div>
            </div>
            <div className="bg-white py-2 px-4  rounded-3xl flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <IoMdClose className="text-secondary" />
                <h3 className="font-bold text-brand hover hover:text-yellow-400">
                  Calery
                </h3>
              </div>
            </div>
            <div className="bg-white py-2 px-4  rounded-3xl flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <IoMdClose className="text-secondary" />
                <h3 className="font-bold text-brand hover hover:text-yellow-400">
                  Spinach
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
