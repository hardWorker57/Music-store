import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import logo from '/logo.png'
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import gsap from "gsap/gsap-core";



const Header = () => {

  const menu_1 = useRef(null); const menu_2 = useRef(null); const menu_3 = useRef(null); const menu_4 = useRef(null); 

  const search = useRef(null); const account = useRef(null); const basket = useRef(null);

  useEffect(() => {
    gsap.from(search.current, {x: -200, skewX: 60, opacity: 0})
    gsap.to(search.current, { x: 0, skewX: 0, opacity: 1, duration: .9, delay: .6, ease: true })
    
    gsap.from(account.current, { opacity: 0})
    gsap.to(account.current, { opacity: 1, duration: .7, delay: .7 })
    
    gsap.from(basket.current, { opacity: 0})
    gsap.to(basket.current, { opacity: 1, duration: .8, delay: .9, ease: true })

    gsap.from(menu_1.current, {y: -60,skewY: 10, opacity: 0})
    gsap.to(menu_1.current, {y: 0, skewY: 0, opacity: 1, duration: .8, delay: .6, ease: true })
    
    gsap.from(menu_2.current, {y: -60,skewY: 10, opacity: 0})
    gsap.to(menu_2.current, {y: 0, skewY: 0, opacity: 1, duration: .8, delay: .8, ease: true })
    
    gsap.from(menu_3.current, {y: -60,skewY: 10, opacity: 0})
    gsap.to(menu_3.current, {y: 0, skewY: 0, opacity: 1, duration: .8, delay: 1, ease: true })
    
    gsap.from(menu_4.current, {y: -60,skewY: 10, opacity: 0})
    gsap.to(menu_4.current, {y: 0, skewY: 0, opacity: 1, duration: .8, delay: 1.2, ease: true })

  }, [])

  return (
    <div>
      <div className="container flex max-w-screen-xl justify-between mx-auto py-2 items-center">
        <div className="header_item flex items-center gap-12">
          <div className="logo max-w-12"><img className="max-w-full" src={logo} alt="logo" /></div>
          <ul className="flex gap-x-6">
            <li ref={menu_1}><Link to='/'>Category brand</Link></li>
            <li ref={menu_2}><Link to='/'>Deals</Link></li>
            <li ref={menu_3}><Link to='/blog'>What's new</Link></li>
            <li ref={menu_4}><Link to='/Contacts'>Contacts</Link></li>
          </ul>
        </div>
        <div className="header_item flex gap-8">
          <div ref={search} className=" flex items-center relative"><input className="w-80 pr-7" type="search" placeholder="Search Product..."/><span className="text-xl"><CiSearch className="cursor-pointer absolute -translate-x-7 -translate-y-1/2"/></span></div>
          <Link to='/personal' ref={account} className="account flex items-center gap-2"><span className="text-2xl"><MdAccountCircle /></span>Account</Link>
          <Link to='/cart' ref={basket} className="cart flex items-center gap-2"><span className="text-2xl"><FaCartArrowDown /></span>Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
