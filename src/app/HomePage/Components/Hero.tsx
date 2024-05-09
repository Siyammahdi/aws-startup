import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row relative justify-between items-center">
      <div style={{inset:"-300px -300px -325px 350px", filter: "blur(100px)"}} className="absolute z-0">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 747 774"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          data-testid="color-gradient"
        >
          <g opacity="0.6">
            <g filter="url(#b)">
              <path
                d="M219.5 210c-24.482 11.708-19.736 171.891-16.116 267.63L226.5 540c22.376 12.196 12.027 15.93 73.626 29.101 77 16.465 86.427-13.715 69.102-64.029-21.717-63.072-9.871-36.589-21.717-78.665-11.846-42.077-13.821-18.295-28.628-104.277-14.808-85.983-7.434-102.983-11.383-112.13-3.949-9.147-57.398-14.635-88 0Z"
                fill="#DF2A5D"
              ></path>
            </g>
            <g filter="url(#c)">
              <path
                d="M285 217.852c-24.482 11.709-11.672 164.039-8.053 259.778L296.69 527c22.376 12.196 15.4 28.929 77 42.101 76.999 16.465 78.085-11.58 69.101-64.029-7.291-42.572-9.871-36.589-21.717-78.666-11.846-42.076-13.821-18.294-28.628-104.277-14.808-85.982-30.602-95.13-34.551-104.277-3.949-9.147-42.293-14.635-72.895 0Z"
                fill="#7C5AED"
              ></path>
            </g>
            <g filter="url(#d)">
              <path
                d="M378.096 229.5c-24.481 11.708-3.619 152.391.001 248.13L390 525c22.376 12.196 23.24 30.929 84.839 44.101 76.999 16.465 74.623-11.103 69.102-64.029-4.441-42.572-9.872-36.589-21.718-78.666-11.846-42.076-13.82-18.294-28.628-104.277-14.807-85.982-30.602-95.13-34.551-104.277-3.948-9.147-50.345-2.987-80.948 11.648Z"
                fill="#7CE8F4"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="b"
              x="160.435"
              y="160.966"
              width="256.173"
              height="452.652"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_4254_81862"
              ></feGaussianBlur>
            </filter>
            <filter
              id="c"
              x="230.363"
              y="168.818"
              width="256.25"
              height="444.987"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_4254_81862"
              ></feGaussianBlur>
            </filter>
            <filter
              id="d"
              x="326.366"
              y="173.549"
              width="259.958"
              height="440.299"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="20"
                result="effect1_foregroundBlur_4254_81862"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
        <div className="lg:w-1/3 space-y-10">
          <h2 className="text-4xl md:text-6xl font-semibold">
          Grow your Business with Uqiflow
          </h2>
          <p className="text-lg lg:text-lg leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
          <button className="bg-button text-white px-8 py-2  rounded-full text-sm font-bold">
            Join now
          </button>
        </div>
        <div className="relative z-10">
          <Image
            className="rounded-2xl my-10"
            src={"/Rectangle 4.png"}
            alt="aws"
            width={600}
            height={400}
          />
        </div>
    </div>
  );
};

export default Hero;
