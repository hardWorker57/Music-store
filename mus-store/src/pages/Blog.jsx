import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';

const Blog = () => {

  const sections = ['news', 'reviews', 'jazz', 'rock', 'pop', 'pop-punk', 'metal', 'classical', 'electronic']
  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: 40, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true, scrollTrigger: {trigger: title.current}});
    
    gsap.fromTo(dash.current, {width: 0, opacity: 0}, { width: '100%', opacity: 1, duration: 1.3, delay: .6, ease: true, scrollTrigger: {trigger: title.current} });

    gsap.fromTo(block.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: .4, duration: .9 })
    
    }, [])

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 ref={title} className="pt-14 pb-5 text-2xl">Blog</h2>
      <hr ref={dash}/>
      <br />
      <div ref={block} className="flex justify-between items-center bg-green-300 w-full h-60 rounded-3xl p-8 text-xl">
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