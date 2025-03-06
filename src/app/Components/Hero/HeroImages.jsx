import Image from "next/image";
import React from "react";

function HeroImages() {
  return (
    <div className=" flex justify-between mt-[80px]">
      <div>
        <Image
          src="/images/products/EatCodeRepeat/eatcoderepeatblack.webp"
          alt=""
          width={400}
          height={300}
          className=" mx-auto rounded-md"
        />
      </div>
      <div className="mt-[-40px]">
        <Image
          src="/images/products/Designer/designerwhite.webp"
          alt=""
          width={400}
          height={300}
          className=" mx-auto rounded-md pb-8"
        />
      </div>
      <div>
        <Image
          src="/images/products/SolvemProbler/solvemblack.webp"
          alt=""
          width={400}
          height={300}
          className=" mx-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default HeroImages;
