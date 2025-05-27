import React from "react";
import DealCard from "./DealCard";

const DealsOfDay = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row gap-7 items-center xl:items-end">
          <h2 className="sectn_heading">Deals Of The Day</h2>
          <ul className="flex flex-wrap pb-3 font-light text-xs md:text-base text-primary gap-3 md:gap-7 group">
            <li>
              <select className="hover:text-brand cursor-pointer group-hover:scale-120 transition-all">
                <option value="">All Deals</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="pt-5 lg:pt-11 flex flex-col xl:flex-row gap-3 md:gap-6">
          <DealCard />
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
      </div>
    </section>
  );
};

export default DealsOfDay;
