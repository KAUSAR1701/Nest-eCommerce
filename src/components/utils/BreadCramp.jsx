import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const BreadCramp = () => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <ul className="flex items-center gap-3 text-secondary font-semibold">
      <li>
        <Link to="/" className="flex items-center gap-2 text-brand">
          <FaHome />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <FaChevronRight className="text-xs" />
      </li>
      <li>
        <p>{location}</p>
      </li>
    </ul>
  );
};

export default BreadCramp;
