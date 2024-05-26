import React from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';

const Blog = () => {

  const sections = ['news', 'reviews', 'jazz', 'rock', 'pop', 'pop-punk', 'metal', 'classical', 'electronic']

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl">Blog</h2>
      <hr />
      <br />
      <div className="flex justify-between items-center bg-green-300 w-full h-60 rounded-3xl p-8 text-xl">
      <Swiper
        // install Swiper modules
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        
        autoplay={{ "delay": 3500 }}
        spaceBetween={230}
        slidesPerView={4}
        loop={true}
        // centeredSlides={true}
        // effect={'fade'}
        slidesPerGroup={4}
        navigation
        pagination={{ clickable: true }}
      >
        {sections.map((el) => (
          <SwiperSlide>
            <div className="relative rounded-3xl w-32 h-40 bg-red-400 my-10 overflow-hidden">    
              <img className='top-0 left-0 h-full object-cover -z-1' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
              <div className="content absolute top-0 left-0 text-center w-full"><h2>{el}</h2></div>
            </div>
          </SwiperSlide>  
        ))}
      </Swiper>    
      </div>
    </div>
  )
}

export default Blog