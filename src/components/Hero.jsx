import React from "react";
import nike from "../assets/HeroImages/nike.png";
import puma from "../assets/HeroImages/puma.png";
import adidas from "../assets/HeroImages/adidas.png";
import newbalance from "../assets/HeroImages/newbalance.png";
import { Sparkles } from "lucide-react";
import Brands from "./Brands";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[400px] h2 flex overflow-hidden">
        {[nike, puma, adidas, newbalance].map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-1/4 h-full object-cover"
            alt={`Brand ${i}`}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-7xl md:text-7xl lg:text-8xl gap-2 flex text-center font-extrabold drop-shadow-lg text-amber-100 px-4">
            Step Into Style
            <Sparkles
              size={70}
              className="text-[#BFA27A] sm:mt-2 max-sm:hidden md:mt-3"
              strokeWidth={2}
            />
          </h1>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Hero;
