import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./user.genres.scss";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

export default function UserGenres({arr}) {
  const [swiperRef, setSwiperRef] = useState(null);

 

  return (
    <div className="mt-[15px]">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={20}
        hashNavigation={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        {arr.map((item, i)=>(
              <SwiperSlide style={{background: item.background, paddingLeft: '21px'}} data-hash="slide1">
              <h1>{item.title}</h1>
              <img className="w-[164] h-[164px]" src={item.img} alt="" />
            </SwiperSlide>
        ))}
   
     
      </Swiper>
    </div>
  );
}
