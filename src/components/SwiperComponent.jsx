import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: "url('/src/assets/images/app-store.png')" }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: "url('/src/assets/images/default.png')" }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: "url('/src/assets/images/hero-image.png')" }}></div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default SwiperComponent;
