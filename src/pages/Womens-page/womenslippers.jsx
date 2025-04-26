import React from "react";
import { Star, ArrowBigRight } from "lucide-react";
import women from '../../assets/Logos/Madden.png'
import { useCart } from "../../context/cartContext";
import { Link } from 'react-router'
import { womenItems, womenArrivalItems } from "../../constants";

const Womenbrand = () => {
  const { addToCart } = useCart();
  return (
    <>
      {womenArrivalItems.map((item, index) => (
        <div
          key={index}
          className="text-center items-center text-2xl flex justify-center font-medium text-neutral-700 h2 bg-amber-300 border border-[#BFA27A]"
        >
          <img src={women} className="w-14 h-10" alt="" />
          <Link className="flex gap-2" to={item.href}>
            {item.label}
            <ArrowBigRight size={30} />
          </Link>
        </div>
      ))}
      <section className="grid gap-10 md:grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {womenItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 mt-2 ml-2 mr-2 mb-2 shadow hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain"
            />
            <h3 className="mt-2 h2 text-lg font-semibold bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text md:text-[85%] capitalize">
              {item.name}
            </h3>
            <div className="h1">${item.price}</div>
            <div className="flex mt-1">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-300"
                  />
                ))}
            </div>
            <button
              className="mt-2 bg-[#BFA27A] h1 text-[#d4d4d4] px-4 py-1 rounded-md text-sm hover:bg-[#917b5c] transition cursor-pointer"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Womenbrand;
