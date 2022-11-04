import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 p-4 w-full fixed top-0 shadow-sm shadow-primary/25 bg-bgLight/80 backdrop-blur-md z-50  mb-4 " >{/* navbar container */}
      <p className="font-black text-2xl text-primary-dark hover:translate-x-2 transition-all duration-500 " >{/* logo */}
        <Link href="/">G-SHOP</Link>
      </p>
      <button  type="button" onClick="" className="text-[32px] text-primary-dark cursor-pointer relative border-none bg-transparent hover:scale-105 hover:text-secondary transition-all ">{/* cart */}
        <HiOutlineShoppingCart />
        <span className="absolute -right-2 -top-1 text-[16px] text-secondary-light bg-secondary rounded-full h-5 w-5 flex items-center justify-center font-semibold  " >3</span>{/* cartqty */}
      </button>
      
    </div>
  )
}

export default Navbar