import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireWorks } from '../lib/utils'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalQuantities(0);
      setTotalPrice(0);
      runFireWorks();
    }, []);
    

    return (
    <div className="w-full h-[90vh] flex items-center" >{/* succes wrapper */}
        <div className="w-[1000px] h-1/2 m-auto bg-primary-light p-12 rounded-xl flex flex-col items-center justify-center " >{/* success */}
            <p className="text-[70px] text-green-500  " >{/* icon */}
                <BsBagCheckFill />
            </p>
            <h1 className="text-3xl font-semibold text-primary-dark mt-8" >Thank you for your order!</h1>
            <p className="text-xl text-bgDark mt-2" >Check your email inbox for the receipt.</p>
            <p className="text-xl text-bgDark mt-2" >
                If you have any questions, please email <span className="text-secondary font-semibold underline" ><Link href="mailto:g-shop@example.com" >g-shop@example.com</Link></span>
            </p>

            <Link href="/">
              <button type="button" onClick={() => {}} className="py-3 px-5  mt-10 text-xl cursor-pointer hover:scale-105 font-medium border shadow-md shadow-primary/25 hover:shadow-primary/50 border-primary-dark text-primary-dark hover:bg-white/50 bg-white hover:font-semibold transition-all rounded-lg ">Continue shopping</button>
            </Link>

        </div>
        
    </div>
    )
}

export default Success