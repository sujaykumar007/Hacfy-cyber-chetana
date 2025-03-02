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
    title: "Discover the Beauty",
    text: "Experience the breathtaking views of nature with stunning landscapes, vibrant colors, and peaceful surroundings that refresh your soul.",
  },
  {
    id: 2,
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    title: "Nature's Wonders",
    text: "From the mesmerizing waterfalls to the lush green forests, nature's wonders never cease to amaze us. Explore the hidden beauty of our planet.",
  },
  {
    id: 3,
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    title: "Breathtaking Views",
    text: "Stand atop a mountain and feel the crisp air while admiring the panoramic view. Nature provides the most spectacular scenery that one can witness.",
  },
  {
    id: 4,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
    title: "Peaceful Moments",
    text: "Step away from the chaos and embrace the tranquility of nature. The soothing sound of the breeze, the rustling of leaves, and the calming waves offer a perfect escape.",
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
