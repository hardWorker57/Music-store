// Catalog.jsx
import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Catalog = ({instruments, deleteInstrument, addToCart, addToLikedList, likedList}) => {
  const { id } = useParams()

  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: 40, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true, scrollTrigger: {trigger: title.current}});
    
    gsap.fromTo(dash.current, {width: 0, opacity: 0}, { width: '100%', opacity: 1, duration: 1.3, delay: .6, ease: true, scrollTrigger: {trigger: title.current} });

    gsap.fromTo(block.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: .4, duration: .9 })
    
    gsap.fromTo('.catalog_item', {opacity: 0, y: 140, scale: .6}, {opacity: 1, y: 0, scale: 1, delay: .3, duration: .8, stagger: .3})
  }, [])


  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 ref={title} className="pt-14 pb-5 text-2xl">Catalog</h2>
      <hr ref={dash}/>
      <br />
      <h2 className='text-2xl'>{id}</h2> <br />
      <div className="flex gap-x-8 gap-y-3 mx-auto max-w-max flex-wrap justify-center">
        {instruments ? instruments.filter(instr => instr.type == id).map((item, i) => (
          <div className='hover:scale-95 adelay' key={i}>
            <div className="catalog_item flex flex-col items-start gap-1 max-w-64 w-64 ">
                <Link to={`/product/good/${item.id}`} className={`${item.stock ? "bg-white relative rounded-2xl overflow-hidden w-full h-72" : "bg-black relative rounded-2xl overflow-hidden w-full h-72"}`}>
                  { item.stock || <div className="stock absolute p-4 glass rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Out of stock</div>}
                  <img src={item ? item.img : ''} alt="" className={`${item.stock ? "max-w-full w-full h-full object-contain" : "opacity-30 max-w-full w-full h-full object-contain"}`} />
                </Link>
                <div className="w-full flex justify-between items-center">
                  <p className='text-lg'>{item ? item.title : ''}</p>
                  <p className='px-7'>{item ? item.price : ''}$</p>
                <p className={`active:text-red-500 rounded-full border p-1 cursor-pointer adelay hover:text-red-500 hover:scale-110 ${likedList.includes(item) ? 'text-red-500' : ''} `} onClick={() => { addToLikedList(item) }}><FaHeart /></p>
                </div>
                <div className="text-xs">{item ? item.description : ''}</div>
                {/* <div className="rating">{ item.producer }</div> */}
                <div className="flex gap-x-3">
                  <button className='btn py-2 px-5 rounded-xl border-gray-100 bg-slate-800' onClick={() => { item.stock && addToCart(item); item.stock && setToast(true) ; setTimeout(() => { setToast(false) }, 800); }}>Add to cart</button>
                  <button className='btn px-2 rounded-xl border-gray-100 bg-slate-800' onClick={() => { deleteInstrument(item.id) }}>Delete</button>
                </div>
            </div>
          </div>
        )) : 'db trouble'}
      </div>
      <div className={`${toast ? 'toastActive fixed top-24 bg-green-500 right-10 p-2.5 cart_item border-t-red-600 border-t-4 border border-transparent' : 'toast fixed top-24 bg-green-500 right-10 p-2.5 cart_item border-t-red-600 border-t-4 border border-transparent'} `}>Successfully added</div>
    </div>
  )
}

export default Catalog