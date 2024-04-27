import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img from '/img.png'
import gsap from "gsap/gsap-core";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { TweenMax } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

const Goods_list = () => {

  const goodsList = ['Guitars', 'Pianos', 'Clarnets', 'Saxs', 'Drums', 'Ukuleles', 'Synthesias']

  let title = useRef(null); let dash = useRef(null);

  useEffect(() => {
    gsap.from(title.current, { x: -100, opacity: 0});
    gsap.to(title.current, { x: 0, opacity: 1, duration: .6, delay: .2, ease: true, scrollTrigger: {trigger: dash.current} });
    
    gsap.from(dash.current, {width: 0, opacity: 0});
    gsap.to(dash.current, { width: '100%', opacity: 1, duration: 1.3, delay: .4, ease: true, scrollTrigger: { trigger: dash.current } });
    
    // gsap.from(card.current, {y: 90, opacity: 0});
    // gsap.to(card.current, { y: 0, opacity: 1, duration: 1.3, delay: .4, ease: true, scrollTrigger: {trigger: card.current} });
    gsap.utils.toArray('.card').forEach(project => {
    // animate all the children in a staggered fashion
      console.log(project.children);
      gsap.from(project.children, {opacity: 0, y: 120});
      gsap.to(project.children, {opacity: 1, y: 0, duration: 1, delay: .4,  scrollTrigger: { trigger: project.current }});
      
      // or just two specific elements:
      // let title = project.querySelector(".title"),
      //     subhead = project.querySelector(".subhead");
    // gsap.to([title, subhead], {rotation: 360, stagger: 0.2});
    //ref={element => {cardRef.current[0] = element;}}
    });

  }, [])

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h2 ref={title} className='pt-14 pb-5 text-2xl'>Products-list</h2>
      <p className='text-xl'>Filter</p> <br/><hr ref={dash}/><br/>
      <div className="list max-w-max mx-auto flex flex-wrap justify-center gap-x-10 gap-y-5">
        {goodsList.map((product, id) => (
          <Link className='card' to={`/product/${product.toLowerCase()}`} key={id}>
            <div className="flex flex-col items-start gap-1 max-w-64">
              <div className="rounded-2xl bg-red-200">
                <img src={img} alt="" className='max-w-full'/>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className='text-lg'>{ product }</p>
                <p className='px-7'>450$</p>
              </div>
              <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
              <div className="rating">rating</div>
              <button className='btn py-2 px-5 rounded-xl border-gray-100 bg-slate-800'>Shop</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Goods_list