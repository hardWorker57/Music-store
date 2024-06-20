import React, { useEffect, useRef } from 'react'
import img from '/img.png'
import {gsap} from 'gsap'

const Banner_section = () => {
  
  const block = useRef(null);  const title = useRef(null);  const desc = useRef(null);  const btn = useRef(null);  const banner = useRef(null);
  useEffect(() => {
    gsap.fromTo(block.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })

    gsap.fromTo(title.current, {y: -50, opacity: 0}, {y: 0, opacity: 1, duration: .6, delay: .6, ease: true})

    gsap.fromTo(desc.current, {y: -50, opacity: 0}, {y: 0, opacity: 1, duration: .6, delay: .7, ease: true})

    gsap.fromTo(btn.current, {y: -50, opacity: 0}, { y: 0, opacity: 1, duration: .6, delay: .8, ease: true })
    
    gsap.fromTo(banner.current, {scale: .3,y: 70, opacity: 0}, {scale: 1,y: 0, opacity: 1, duration: .6, delay: .6, ease: true})
  }, [])
  
  return (
    <div ref={block} className='relative z-10 flex items-center justify-between gap-6 max-w-screen-sm lg:max-w-screen-xl md:max-w-screen-32 my-44 mx-auto px-12 py-8 glass rounded-3xl'>
      <div className="flex flex-col items-start gap-3">
        <div ref={title} className="text-7xl">Premium instruments online shop</div>
        <div ref={desc} className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus exercitationem assumenda possimus temporibus dolorem. Nihil officiis quisquam accusamus iusto quod?</div>
        <button ref={btn} className='btn prime_btn py-2 px-5 rounded-xl border-gray-100 bg-slate-800'>Shop now</button>
      </div>
      <div className="max-w-xl">
        <img ref={banner} className='max-w-full' src={img} alt="banner-image" />
      </div>
    </div>
  )
}

export default Banner_section