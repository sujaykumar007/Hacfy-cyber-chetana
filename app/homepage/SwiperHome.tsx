'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { assets } from '@/public/assets/assets';

const links = [
  { image: '/assets/ncpcr.png', text: "Cyber Chetana", description: "Lorem ipsum dolor sit amet." },
  { image: '/assets/nielit.png', text: "Cyber Chetana", description: "Lorem ipsum dolor sit amet." },
  { image: '/assets/isea.png', text: "Cyber Chetana", description: "Lorem ipsum dolor sit amet." },
  { image: '/assets/cybercrime.png', text: "Cyber Chetana", description: "Lorem ipsum dolor sit amet." },
  { image: '/assets/crtn.jpg', text: "Cyber Chetana", description: "Lorem ipsum dolor sit amet." },
];

const SwiperHome = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[60vh]">
      <div className="text-4xl md:text-5xl xl font-extrabold mb-10 text-center" style={{ color: "var(--primary-blue)" }}>
        <Image
          src={assets.weblink}
          alt="link"
          className="w-10 inline mr-5 h-10"
          quality={100}
        />
        Useful Links
      </div>

      <div className="w-full h-[20vh] max-h-screen flex items-center justify-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: true }}
          speed={6000}
          modules={[Pagination, FreeMode, Autoplay]}
          className="h-full"
        >
          {links.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center h-full p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 bg-white">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={100}
                  height={100}
                  quality={100}
                  className="object-cover rounded-full mb-4"
                />
                <div className="font-semibold text-lg text-center text-gray-800">{item.text}</div>
                <p className="text-sm text-center text-gray-600 mt-2">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Styling */}
      <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal mt-6">
        {/* You can further style the pagination here */}
      </div>
    </div>
  );
};

export default SwiperHome;
