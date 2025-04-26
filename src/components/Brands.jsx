import React from "react";
import { brandItems } from "../constants";
import { Link } from "react-router";

const Brands = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {brandItems.map((brand, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md group"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4">
              <h3 className="text-[#d4d4d4] text-3xl h2 font-semibold">
                {brand.name}
              </h3>
              <p className="text-[#d4d4d4] text-xl h1">{brand.description}</p>
              <Link to={brand.href}>
                <button className="mt-2 bg-[#BFA27A] h1 text-[#d4d4d4] px-4 py-1 rounded-full text-sm hover:bg-[#202020] transition cursor-pointer">
                  Shop
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Brands;
