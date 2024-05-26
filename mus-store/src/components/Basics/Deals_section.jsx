import gsap from "gsap";
import React, { useEffect, useRef } from "react";
// import { useSnapshot } from 'valtio';
// import state from '../../store'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Deals_section = () => {

  // const snap = useSnapshot(state);
  let title = useRef(null); let dash = useRef(null);

  useEffect(() => {
    gsap.from(title.current, {skewX: 40, x: -100, opacity: 0});
    gsap.to(title.current, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true, scrollTrigger: {trigger: title.current}});
    
    gsap.from(dash.current, {width: 0, opacity: 0});
    gsap.to(dash.current, { width: '100%', opacity: 1, duration: 1.3, delay: .6, ease: true, scrollTrigger: {trigger: title.current} });

  }, [])

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2  ref={title} className="pt-14 pb-5 text-2xl">Latest deals</h2>
      <hr  ref={dash} />
      <br />

    </div>
  );
};

export default Deals_section;
