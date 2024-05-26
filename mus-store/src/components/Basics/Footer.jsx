import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
      <div className='footer w-full h-20 mt-8'></div>
      <div className="container max-w-screen-xl mx-auto pb-4 z-10 flex justify-between items-center">
        <p>2024 Atabek. Terms of use and privacy policy</p>
        <ul className='flex gap-x-4 text-xl'>
          <li><a href=""><FaInstagram /></a></li>
          <li><a href=""><FaTwitter /></a></li>
          <li><a href=""><FaFacebook /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer