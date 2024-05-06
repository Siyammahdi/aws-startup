import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-1/3 space-y-10">
        <h2 className="text-4xl md:text-7xl font-bold leading-[1.20] ">Grow your startup with AWS</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          Join AWS Activate, the leading startup program, to bring your idea to
          market - backed by the most trusted cloud platform.
        </p>
        <button className="bg-button text-white px-6 py-4  rounded-full text-sm font-bold">
          Join now
        </button>
      </div>
      <div>
        <Image className="rounded-2xl my-10" src={"/maxresdefault.jpg"} alt="aws" width={800} height={500} />
      </div>
    </div>
  );
};

export default Hero;
