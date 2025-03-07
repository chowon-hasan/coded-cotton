import React from "react";
import HeroImages from "./HeroImages";

import BuyButton from "../Buttons/BuyButton";

const Hero = () => {
  return (
    <div className="my-12 max-w-7xl mx-auto">
      <div className="absolute -left-full top-0 w-0 h-0 overflow-hidden">
        <h2 className="text-xl font-semibold">
          Premium Freelancer T-Shirts | কোডেড কটন - সেরা ফ্রিল্যান্সার টি-শার্ট
        </h2>
        <h3 className="text-base font-medium">
          Unique Tech-Inspired Designs | ইউনিক টেক-অনুপ্রাণিত ডিজাইন
        </h3>
        <h3 className="text-base font-medium">
          Premium Quality Fabric | প্রিমিয়াম মানের কাপড়
        </h3>
        <h3 className="text-base font-medium">
          Comfortable and Stylish Apparel | আরামদায়ক এবং স্টাইলিশ পোশাক
        </h3>
        <h3 className="text-base font-medium">
          Bangladesh Premium T-Shirt Brand | বাংলাদেশের প্রিমিয়াম টি-শার্ট
          ব্র্যান্ড
        </h3>
        <h3 className="text-base font-medium">
          Freelancer Clothing | ফ্রিল্যান্সার পোশাক
        </h3>
      </div>
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
