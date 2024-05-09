import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Testimonial } from "./types";
import { testimonialsData } from "./testimonialsData";

const Testimonials: React.FC = () => {
  return (
    <div className="my-20">
      <h2 className="text-5xl text-center my-20">What our clients say</h2>
      <Swiper
        navigation
        loop
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {testimonialsData.map((testimonial: Testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex items-center">
              <div className="w-1/2">
                <Image src={testimonial.image} alt="user" height={500} width={400} />
              </div>
              <div className="w-1/2 space-y-10">
                <Image src="/Vector.png" alt="user" height={60} width={60} />
                <p>{testimonial.text}</p>
                <div>
                  <h5 className="text-2xl">- {testimonial.name}</h5>
                  <p className="text-sm mx-3">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
