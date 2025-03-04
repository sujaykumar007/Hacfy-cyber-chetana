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
  { image: '/assets/ncpcr.png', url: 'https://ncpcr.gov.in/',  },
  { image: '/assets/nielit.png', url: 'https://nielitcyberforensics.in/', },
  // { image: '/assets/karmayogi.png', url: 'https://cybercrime.gov.in/', },
  { image: '/assets/isea.png', url: 'https://isea.gov.in/', },
  { image: '/assets/cybercrime.png', url: 'https://elibrary.svpnpa.gov.in/user#/home',  },
  { image: '/assets/crtn.jpg', url: 'https://www.cert-in.org.in/',  },
  
];

const SwiperComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[60vh]">
   
    <div
  className="text-4xl md:text-5xl xl font-extrabold mb-10"
  style={{ color: "var(--primary-blue)" }}
>
<Image
src={assets.weblink}
alt="link"
className='w-10 inline mr-5 h-10'
quality={100}/>

  Useful Links
</div>


      <div className="w-full h-[20vh] max-h-screen flex items-center justify-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          pagination={{ clickable: true }}
          modules={[Pagination, FreeMode, Autoplay]}
          className="h-full"
        >
          {links.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center h-full text-lg  p-4 rounded-lg shadow-lg">
             

    <Image
  src={item.image}
  alt={item.title}
  width={100}  
  height={100}
  quality={100} 
  className="rounded-full object-cover"
/>

                 
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
