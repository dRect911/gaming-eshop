import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="w-full p-3 md:p-4" >
      <p className="text-primary-dark dark:text-primary-light/75 text-center text-[12px] sm:text-[15px] md:text-lg font-medium" >2022 - dRect911 All rights reserved.</p>
      <div className="text-primary-dark dark:text-primary-light/75 text-center text-xl md:text-2xl flex items-center justify-center gap-4 p-1 md:p-2" >
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </div>
    </div>
  )
}

export default Footer