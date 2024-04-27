import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  let title = useRef(null); let dash = useRef(null);

  useEffect(() => {
    gsap.from(title.current, {skewX: 40, x: -100, opacity: 0});
    gsap.to(title.current, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true, scrollTrigger: {trigger: title.current}});
    
    gsap.from(dash.current, {width: 0, opacity: 0});
    gsap.to(dash.current, { width: '100%', opacity: 1, duration: 1.3, delay: .6, ease: true, scrollTrigger: {trigger: title.current} });

  }, [])

  return (
    <div className="max-w-screen-xl mx-auto pb-40">
      <h2 ref={title} className="pt-14 pb-5 text-2xl">Services To Help You Shop</h2>
      <hr ref={dash}/>
      <br />
      <div className="services flex justify-between gap-7">
        <div className="services_item bg-slate-400">
          <div className="img">
            <img src={`https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=`} alt="img" />
          </div>
          <div className="card_typo px-6 pb-5 pt-8">
            <div className="title text-xl">Freaquently Asked Questions</div>
            <div className="text-xs">Updates on safe Shopping in our Stores</div>
          </div>
        </div>
        <div className="services_item bg-slate-400">
          <div className="img">
            <img src={`https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=`} alt="img" />
          </div>
          <div className="card_typo px-6 pb-5 pt-8">
            <div className="title text-xl">Online Payments Process</div>
            <div className="text-xs">Updates on safe Shopping in our Stores</div>
          </div>
        </div>
        <div className="services_item bg-slate-400">
          <div className="img">
            <img src={`https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=`} alt="img" />
          </div>
          <div className="card_typo px-6 pb-5 pt-8">
            <div className="title text-xl">Home Delivery Options</div>
            <div className="text-xs">Updates on safe Shopping in our Stores</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
