import React from "react";
import Hero from "./Components/Hero/Hero";
import FeaturedItems from "./Components/Featured/Featured";
import CustomDesignSection from "./Components/Custome Section/CustomeDesign";
import CustomDesignTool from "./Components/Fabric";
import WhyChooseUs from "./Components/why choose us/WhyChooseUs";

const MainLayout = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedItems />
      <CustomDesignSection />
      <WhyChooseUs/>
      {/* <CustomDesignTool/> */}
    </div>
  );
};

export default MainLayout;
