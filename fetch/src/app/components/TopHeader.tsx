import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div>
       <div className="hidden md:flex items-center justify-between w-full h-[46px] bg-[#252B42] text-white px-10">
     
     <div className="flex items-center gap-10">
       <div className="flex items-center gap-2">
         <FaPhone />
         <p className="font-bold">(225) 555-0118</p>
       </div>

       <div className="flex items-center gap-2">
         <MdOutlineMailOutline />
         <p className="font-bold">michelle.rivera@example.com</p>
       </div>
     </div>

     
     <div className="font-bold">
       Follow Us and get a chance to win 80% off
     </div>

     
     <div className="flex items-center gap-2">
       <div className='font-bold'>
         Follow Us :
       </div>
       <div className="header_top__icon_wrapper">
         <FaFacebook />
       </div>
       <div className="header_top__icon_wrapper">
         <FaTwitterSquare />
       </div>
       <div className="header_top__icon_wrapper">
         <FaInstagram />
       </div>
       <div className="header_top__icon_wrapper">
         <FaLinkedin />
       </div>
     </div>
   </div>
    </div>
  )
}

export default TopHeader
