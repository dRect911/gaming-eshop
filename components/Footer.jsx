import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="w-full p-4" >
      <p className="text-primary-dark text-center text-lg font-medium" >2022 - dRect911 All rights reserved.</p>
      <div className="text-primary-dark text-center text-2xl flex items-center justify-center gap-4 p-2" >
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </div>
    </div>
  )
}

export default Footer