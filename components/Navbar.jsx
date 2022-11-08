import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex justify-between items-center h-14 md:h-16 p-4 w-full fixed top-0 shadow-sm shadow-primary/25 bg-bgLight/80 backdrop-blur-md z-50  mb-4 " >{/* navbar container */}
      <p className="font-black text-2xl text-primary-dark hover:translate-x-2 transition-all duration-500 " >{/* logo */}
        <Link href="/">G-SHOP</Link>
      </p>
      <button  type="button" onClick={() => { setShowCart(true) }} className="text-[32px] text-primary-dark cursor-pointer relative border-none bg-transparent hover:scale-105 hover:text-secondary transition-all ">{/* cart */}
        <HiOutlineShoppingCart />
        { totalQuantities > 0 && <span className="absolute -right-2 -top-1 text-[16px] text-secondary-light bg-secondary rounded-full h-5 w-5 flex items-center justify-center font-semibold  " >{totalQuantities}</span>}{/* cartqty */}
      </button>
      
      { showCart && <Cart /> }
    </div>
  )
}

export default Navbar