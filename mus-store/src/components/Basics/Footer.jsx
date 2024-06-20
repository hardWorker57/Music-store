import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='relative footer_main'>
      <div className='footer w-full h-20 bottom-0 absolute z-0'></div>
      <div className="container max-w-screen-xl mx-auto pb-4 z-50 flex justify-between items-center">
        <p>© 2024 Atabek. All rights reserved.</p>
        <ul className='flex gap-x-4 text-2xl'>
          <li className='hover:scale-125 adelay'><a href=""><FaInstagram /></a></li>
          <li className='hover:scale-125 adelay'><a href=""><FaTwitter /></a></li>
          <li className='hover:scale-125 adelay'><a href=""><FaFacebook /></a></li>
        </ul>
      </div>
    </div>
  )
} 

export default Footer