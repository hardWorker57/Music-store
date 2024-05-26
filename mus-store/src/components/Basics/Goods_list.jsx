import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap/gsap-core";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Goods_list = () => {

  const goodsList = [
    {
      'item': 'Guitars',
      'img': '/category/guitar11.jpg',
      'price': 50
    },
    {
      'item': 'Pianos',
      'img': '/category/piano1.jpg',
      'price': 150
    },
    {
      'item': 'Clarnets',
      'img': '/category/clarnet1.webp',
      'price': 80
    },
    {
      'item': 'Saxs',
      'img': '/category/sax1.jpg',
      'price': 230
    },
    {
      'item': 'Drums',
      'img': '/category/drums11.jpg',
      'price': 500
    },
    {
      'item': 'Ukuleles',
      'img': '/category/uke1.jpg',
      'price': 25
    },
    {
      'item': 'Synthesias',
      'img': '/category/syn.jpg',
      'price': 350
    }]

  let title = useRef(null); let dash = useRef(null);

  useEffect(() => {
    gsap.from(title.current, { x: -100, opacity: 0});
    gsap.to(title.current, { x: 0, opacity: 1, duration: .6, delay: .2, ease: true, scrollTrigger: {trigger: dash.current} });
    
    gsap.from(dash.current, {width: 0, opacity: 0});
    gsap.to(dash.current, { width: '100%', opacity: 1, duration: 1.3, delay: .4, ease: true, scrollTrigger: { trigger: dash.current } });
    
    gsap.from('.card', {opacity: 0, y: 100, scale: 0.5})
    gsap.to('.card', {opacity: 1, y: 0, scale: 1, ease: true, stagger: 0.3, duration: 1, delay: .8,  scrollTrigger: { trigger: '.card' }});
      
  }, [])

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h2 ref={title} className='pt-14 pb-5 text-2xl'>Products-list</h2>
      <p className='text-xl'>Filter</p> <br/><hr ref={dash}/><br/>
      <div className="list max-w-max mx-auto flex flex-wrap justify-center gap-x-10 gap-y-5">
        {goodsList.map((product, id) => (
          <Link className='card' to={`/product/${product.item}`} key={id}>
            <div className="flex flex-col items-start gap-1 max-w-64 hover:scale-90 adelay">
              <div className="rounded-2xl bg-red-200 overflow-hidden w-full h-72">
                <img src={product.img} alt="" className='max-w-full w-full h-full'/>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className='text-lg'>{ product.item }</p>
                <p className='px-7'> from {product.price}$</p>
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