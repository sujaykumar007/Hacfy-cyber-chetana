"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    title: "Investment Frauds",
    text: "Scammers promise huge profits on fake investments, tricking people into losing their money.",
  },
  {
    id: 2,
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    title: "Digital Arrest Scams",
    text: "Fraudsters pose as police or officials, threatening arrest unless victims pay money",
  },
  {
    id: 3,
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    title: "FedEx Scams",
    text: "Fake courier messages claim parcel issues to steal personal information or payments.",
  },
  {
    id: 4,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Phishing Attacks",
    text: "Fake emails or websites trick users into sharing sensitive details like passwords or bank info",
  },
  {
    id: 5,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Ransomware Attacks",
    text: "Hackers lock personal or business data and demand money to unlock it.",
  },
  {
    id: 6,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Online Job Frauds",
    text: "Fake job offers steal personal information or ask for money in return for jobs.",
  },
  {
    id: 7,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Loan App Scams",
    text: "Fraud apps offer quick loans but misuse data and charge hidden fees",
  },
 
  {
    id: 8,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Cryptocurrency Frauds",
    text: "Fake crypto schemes lure people into investing and disappear with their money",
  },
  {
    id: 9,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Sextortion Schemes",
    text: "Criminals blackmail victims after tricking them into sharing private photos or videos.",
  },
];

const ImageSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full px-6 md:px-16 gap-10 h-screen">
     
      <div className="w-full md:w-1/2 flex justify-center">
        <Swiper
          effect="cube"
          grabCursor={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCube, Pagination, Autoplay]}
         
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {slides[activeIndex]?.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
          {slides[activeIndex]?.text}
        </p>
      </div>
    </div>
  );
};

export default ImageSwiper;
