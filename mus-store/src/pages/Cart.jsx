import gsap from "gsap/gsap-core";
import React, { useEffect, useRef, useState } from "react";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

const Cart = ({cart, userAuth}) => {

  // const [totalSum, setTotalSum] = useState(0);
  let count = 0;
  const [newCart, setCart] = useState(cart)
  const [bol, setBol] = useState(false)

  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: 40, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true, scrollTrigger: {trigger: title.current}});
    
    gsap.fromTo(dash.current, {width: 0, opacity: 0}, { width: '100%', opacity: 1, duration: 1.3, delay: .6, ease: true, scrollTrigger: {trigger: title.current} });

    gsap.fromTo(block.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: .4, duration: .9 })
    
    gsap.fromTo('.cart_anim', {opacity: 0, x: -60}, {opacity: 1, x: 0, delay: .3, duration: .8, stagger: .3})
  }, [])

  const increaseQuantity = (id) => {
    setCart(newCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(newCart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 ref={title} className="pt-14 pb-5 text-2xl">Cart</h2>
      <hr ref={dash}/>
      <br />
      <div className="flex justify-between gap-x-10">
        
        <div className="flex flex-col w-screen">
          <p>Shopping continue</p> <br />
          <hr /><br />
          <h2>Shopping cart</h2>
          <div className="flex justify-between">
            <p>You have {newCart ? newCart.length : ''} item in your cart</p> 
            <p className="flex items-center gap-x-7 text-lg">Clear the cart <button className="adelay hover:text-black hover:bg-white" onClick={() => { setCart([]); cart.length = 0; }}><GoTrash /></button></p>
          </div><br />
          {userAuth ? <div className="cart_items flex flex-col gap-y-3">
            {newCart.map((item, i) => (
              <div className="cart_item cart_anim flex justify-between items-center gap-x-6 rounded-2xl p-2 overflow-hidden" key={i}>
                <div className="flex gap-x-5 items-center">
                  <div className="card_img w-20 h-16"><img className="max-h-full object-contain rounded-lg " src={item ? item.img : ''} alt="" /></div>
                  <div className="info">
                    <h2 className="text-xl">{item ? item.title : ''}</h2>
                    <p>{item ? item.description : ''}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-x-24">
                  <div className="update_wrap flex items-center gap-x-2">
                    <p className="text-2xl">{item.quantity}</p>
                    <div className=" text-black text-3xl cursor-pointer">
                      <div className="update rounded-full adelay hover:text-white" onClick={() => { increaseQuantity(item.id) }}><IoIosArrowDropupCircle /></div>
                      <div className="update rounded-full adelay hover:text-white" onClick={() => { decreaseQuantity(item.id) }}><IoIosArrowDropdownCircle /></div>
                    </div>
                  </div>
                  <p>${item ? item.price * item.quantity : ''}</p><div className="hidden">{count += item.price * item.quantity}</div>
                  <button className="adelay hover:text-black hover:bg-white" onClick={() => { setBol(!bol); newCart.splice(i, 1) }}><GoTrash /></button>
                </div>
                
              </div>
            ))}
          </div> : 'Please authorize'}
        </div>

        <div ref={block} className="cart_item flex flex-col p-6 w-5/6 rounded-3xl cardColor gap-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Card Details</h2><p className="text-4xl p-3 rounded-full"><IoPersonCircle /></p>
          </div>
          <p>Card type</p>
          Cards
          <br />
          <h2>Name of card</h2>
          <input className="cartInput" type="text" placeholder="Name"/>
          <h2>Card Number</h2>
          <input className="cartInput" type="text" placeholder="1111 2222 3333 4444"/>
          <button>${count} Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
