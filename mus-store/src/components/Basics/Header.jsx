import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import logo from '/logo.png'
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import gsap from "gsap/gsap-core";



const Header = () => {

  const search = useRef(null); const account = useRef(null); const basket = useRef(null);

  useEffect(() => {

    gsap.fromTo(search.current, {x: -200, skewX: 60, opacity: 0}, { x: 0, skewX: 0, opacity: 1, duration: .9, delay: .6, ease: true })
    gsap.fromTo(account.current, { opacity: 0}, { opacity: 1, duration: .7, delay: .7 })    
    gsap.fromTo(basket.current, { opacity: 0}, { opacity: 1, duration: .8, delay: .9, ease: true })

    gsap.fromTo('.menu', {y: -60,skewY: 10, opacity: 0}, {y: 0, skewY: 0, opacity: 1, duration: .8, delay: .6, stagger: 0.2, ease: true })

  }, [])

  return (
    <div className="h-10">
      <div className="header mx-auto fixed container flex max-w-screen justify-between py-2 px-32 items-center z-50 bg-slate-600 backdrop-blur bg-opacity-80">
        <div className="header_item flex items-center gap-12">
          <div className="logo max-w-12"><img className="max-w-full" src={logo} alt="logo" /></div>
          <ul className="flex gap-x-6">
            <li className="menu"><NavLink to='/'>Category</NavLink></li>
            <li className="menu"><NavLink to='/about'>About</NavLink></li>
            <li className="menu"><NavLink to='/blog'>Blog</NavLink></li>
            <li className="menu"><NavLink to='/contacts'>Contacts</NavLink></li>
          </ul>
        </div>
        <div className="header_item flex gap-8">
          <div ref={search} className=" flex items-center relative"><input className="w-80 pr-7" type="search" placeholder="Search Product..."/><span className="text-xl"><CiSearch className="cursor-pointer absolute -translate-x-7 -translate-y-1/2"/></span></div>
          <NavLink to='/personal' ref={account} className="account flex items-center gap-2"><span className="text-2xl"><MdAccountCircle /></span>Account</NavLink>
          <NavLink to='/cart' ref={basket} className="cart flex items-center gap-2"><span className="text-2xl"><FaCartArrowDown /></span>Cart</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
