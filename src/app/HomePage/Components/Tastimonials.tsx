import React from "react";
import Img from "../../../../public/Rectangle 766.png";
import Vector from "../../../../public/Vector.png";
import Image from "next/image";

const Tastimonials: React.FC = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl lg:text-5xl text-center my-10 lg:my-20">What our client says</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-1/2">
          <Image src={Img} alt="user" height={500} width={400} />
        </div>
        <div className="lg:w-1/2 space-y-10">
            <Image src={Vector} alt="user" height={60} width={60}/>
          <p>{testimonialsData[0].text}</p>
          <div>
            <h5 className="text-2xl">- {testimonialsData[0].name}</h5>
            <p className="text-sm mx-3">{testimonialsData[0].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tastimonials;

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/john-doe.jpg",
    title: "CEO, Company XYZ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
    stars: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/jane-smith.jpg",
    title: "Founder, Startup ABC",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stars: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "/images/alice-johnson.jpg",
    title: "CTO, Tech Solutions",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    stars: 5,
  },
];
