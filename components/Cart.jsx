import React, {useRef} from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { HiMinus, HiPlus, HiChevronLeft, HiOutlineShoppingBag } from 'react-icons/hi2';
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, showCart, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    });

    if(response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="w-[100vw] bg-bgDark/50 backdrop-blur-xl fixed top-0 right-0 z-[100] transition-all " ref={cartRef} >{/* cart wrapper */}
      <div className="relative h-[100vh] w-[600px] bg-bgLight py-10 px-2 float-right text-bgDark " >{/* cart container */}
        <button type="button" onClick={() => { setShowCart(false) }} className="group flex items-center gap-0.5 ml-2 bg-transparent border-none text-lg font-medium cursor-pointer "  > {/* cart heading */}
          <HiChevronLeft />{/* className="group-hover:scale-110 transition-all" */}
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-secondary"> ({totalQuantities} items) </span>
        </button>

        {cartItems.length < 1 && (
          <div className="text-center m-10" >
            <HiOutlineShoppingBag size={150} className="m-auto text-primary-light" />
            <h3 className="text-lg font-semibold text-primary-dark" >Your shopping is empty.</h3>
            <Link href="/">
              <button type="button" onClick={() => { setShowCart(false) }} className="py-3 px-5  mt-10 text-xl cursor-pointer hover:scale-105 font-medium border bg-white border-secondary text-secondary hover:border-secondary-dark hover:text-secondary-dark hover:bg-secondary-light hover:font-semibold transition-all rounded-lg ">Continue shopping</button>
            </Link>
          </div>
        )}

        <div className=" mt-4 overflow-auto scrollbar-thin scrollbar-track-primary-light scrollbar-thumb-primary-dark scrollbar-rounded-full  max-h-[70vh] py-5 px-4 " >
          {cartItems.length >= 1 && cartItems.map((item) => {
            console.log(item);
            return (
            <div key={item._id} className="flex gap-4 p-5">
              <img src={urlFor(item?.image[0])} alt="product-image" className="max-w-[180px] max-h-[150px] rounded-lg border border-secondary-light bg-white" />
              <div className="py-4 w-[340px]">
                <div className="flex justify-between items-center w-full ">
                  <h1 className="font-semibold">{item.name} </h1>
                  <h1 className="text-primary font-bold text-xl">${item.price}</h1>
                </div>
                <div className="mt-8 flex justify-between items-center w-full" >
                  <div className=" flex gap-5 items-center select-none" >{/* Quantity */}
                    <span className="flex items-center w-auto bg-white border border-primary-dark rounded p-1" >{/* qty desc */}
                      <span onClick={() => {toggleCartItemQuantity(item._id, 'dec') }} className="flex shrink-0 items-center justify-center cursor-pointer  border-r  text-bgDark hover:text-primary  w-8 h-8 rounded-l transition-all"><HiMinus/></span>
                      <span className="flex shrink-0 items-center justify-center cursor-pointer text-primary-dark w-8 h-8 ">{item.quantity}</span>
                      <span onClick={() => {toggleCartItemQuantity(item._id, 'inc') }} className="flex shrink-0 items-center justify-center cursor-pointer border-l  text-bgDark hover:text-primary  w-8 h-8 rounded-r transition-all"><HiPlus/></span>
                    </span>
                  </div>
                  <button type="button" onClick={() => { onRemove(item._id) }} className="text-2xl text-secondary cursor-pointer hover:scale-105 transition-all ">
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          )})}
        </div>

        {cartItems.length >= 1 && (
          <div className="sticky bottom-0 px-4 py-8 w-[592px] m-auto " >
            <div className="flex justify-between items-center w-full" >
              <h3 className="text-xl font-semibold" >Subtotal: </h3>
              <h3 className="text-xl font-bold text-primary" >${totalPrice}</h3>
            </div>
            <div className="w-full flex justify-center">
              <button type="button" onClick={handleCheckout} className="py-3 px-5 w-[300px] m-auto uppercase mt-10 text-xl cursor-pointer hover:scale-105 font-semibold border bg-white border-secondary text-secondary hover:border-secondary-dark hover:text-secondary-dark hover:bg-secondary-light hover:font-semibold transition-all rounded-lg ">Checkout with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart