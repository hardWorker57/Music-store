import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import img1 from '/slider/mus-store/public/slider/anime-girl-guitar-music-4k-wallpaper-uhdpaper.com-251@0@j.jpg'
// import { EffectFade } from 'swiper/modules';

const Top_goods = () => {
    let top_goods = [
        {
            'title': 'T1',
            'src': "https://wallpapers.com/images/hd/music-4k-doodle-fhosgwe4adxuunwq.jpg"
        },
        {
            'title': 'T2',
            'src': '/slider/pokemon.jpg'
        },
        {
            'title': 'T3',
            'src': "/slider/anime2.jpg"
        },
        {
            'title': 'T4',
            'src': '/slider/anime3.jpg'
        },
        {
            'title': 'T5',
            'src': '/slider/cat_moon.jpg'
        },
        {
            'title': 'T6',
            'src': '/slider/lofi.jpg'
        },
        {
            'title': 'T7',
            'src': '/slider/mount.jpg'
        }    
    ]

//   useEffect(() => {
//     gsap.fromTo(
//       title.current,
//       { skewX: 40, x: -100, opacity: 0 },{skewX: 0,x: 0,opacity: 1,duration: 0.6,delay: 0.4,ease: true,scrollTrigger: { trigger: title.current },}
//     );

//     gsap.fromTo(dash.current,
//       { width: 0, opacity: 0 },
//       {
//         width: "100%",
//         opacity: 1,
//         duration: 1.3,
//         delay: 0.6,
//         ease: true,
//         scrollTrigger: { trigger: title.current },
//       }
//     );
//   }, []);

  return (
    <div className="full_screen_slider max-w-screen">
      {/* <h2 ref={title} className="pt-14 pb-5 text-2xl">
        Top
      </h2>
      <hr ref={dash} /> */}
      <Swiper
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-inactive-size": "20px",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"  
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3500 }}
        // spaceBetween={230}
        slidesPerView={1}
        loop={true}
        // centeredSlides={true}
        effect={'fade'}
        // slidesPerGroup={1}
              // navigation
        pagination={{ clickable: true }}
      >
        {top_goods.map((el, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-xl bg-red-100 my-10 overflow-hidden h-screen">
              <img
                className="max-h-screen w-full top-0 left-0 h-full object-cover -z-1"
                src={el.src} alt="img"
              />
              <div className="content absolute top-20 left-0 text-center w-full">
                {/* <h2>{el.title}</h2> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Top_goods;
