import React, { useEffect, useRef } from 'react'
import img from '/img.png'
import {gsap} from 'gsap'

const Banner_section = () => {
  
  const block = useRef(null);  const title = useRef(null);  const desc = useRef(null);  const btn = useRef(null);  const banner = useRef(null);
  useEffect(() => {
    gsap.from(block.current, { x: 100, opacity: 0 })
    gsap.to(block.current, { x: 0, opacity: 1, duration: 1 })

    gsap.from(title.current, {y: -50, opacity: 0})
    gsap.to(title.current, {y: 0, opacity: 1, duration: .6, delay: .6, ease: true})

    gsap.from(desc.current, {y: -50, opacity: 0})
    gsap.to(desc.current, {y: 0, opacity: 1, duration: .6, delay: .7, ease: true})

    gsap.from(btn.current, {y: -50, opacity: 0})
    gsap.to(btn.current, { y: 0, opacity: 1, duration: .6, delay: .8, ease: true })
    
    gsap.from(banner.current, {scale: .3,y: 70, opacity: 0})
    gsap.to(banner.current, {scale: 1,y: 0, opacity: 1, duration: .6, delay: .6, ease: true})
  }, [])
  
  return (
    <div ref={block} className='flex items-center justify-between gap-6 max-w-screen-xl my-10 mx-auto px-12 py-14 bg-slate-400 rounded-3xl'>
      <div className="flex flex-col items-start gap-3">
        <div ref={title} className="text-7xl">Premium instruments online shop</div>
        <div ref={desc} className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus exercitationem assumenda possimus temporibus dolorem. Nihil officiis quisquam accusamus iusto quod?</div>
        <button ref={btn} className='btn py-2 px-5 rounded-xl border-gray-100 bg-slate-800'>Shop now</button>
      </div>
      <div className="max-w-xl">
        <img ref={banner} className='max-w-full' src={img} alt="banner-image" />
      </div>
    </div>
  )
}

export default Banner_section