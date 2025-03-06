import React from "react";
import HeroImages from "./HeroImages";

import BuyButton from "../Buttons/BuyButton";

const Hero = () => {
  return (
    <div className="my-12 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold text-center uppercase tracking-wider">
        Coded cotton
      </h1>
      <p className="text-lg font-bold text-center uppercase tracking-wider">
        Wear Your Work, Own Your Identity
      </p>
      <div className="mt-12 mx-auto">
        <HeroImages />
      </div>
      <div className="text-center mt-12 ">
        <BuyButton text="Shop Now" />
      </div>
    </div>
  );
};

export default Hero;
