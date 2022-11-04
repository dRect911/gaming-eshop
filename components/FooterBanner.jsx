import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const FooterBanner = ( {footerBanner} ) => {
  return (
    <div className="rounded-2xl relative bg-secondary text-white mt-32 w-full leading-none h-[400px] px-24 py-10 group " > {/* footer-banner-container */}
      <div className="flex justify-between" > {/* banner-desc */}
        <div className="" > {/* left */}
          <p className="m-4 mb-4 text-xl font-bold text-secondary-dark "> {footerBanner.discount} </p>
          <h3 className="font-black text-[80px] ml-[25px] group-hover:translate-x-6 transition-all duration-1000 group-hover:-skew-x-12 "> {footerBanner.largeText1} </h3>
          <h3 className="font-black text-[80px] ml-[25px] translate-x-6 group-hover:-translate-x-6 transition-all duration-1000 group-hover:opacity-50"> {footerBanner.largeText2} </h3>
          <p className="m-4 text-secondary-light "> {footerBanner.saleTime} </p>
        </div>
        <div className="leading-snug group " > {/* right */}
          <p className="text-[18px]  "> {footerBanner.smallText} </p>
          <h3 className="font-extrabold text-[80px]"> {footerBanner.midText} </h3>
          <p className="text-[14px] text-secondary-light "> {footerBanner.desc} </p>
          <Link href={`/product/${footerBanner.product}`} >
            <button type="button" className="rounded-lg py-[10px] px-4 bg-secondary-dark text-secondary-light hover:bg-secondary-light hover:text-secondary-dark border-2 border-secondary-dark transition-all hover:font-bold  mt-10 text-[18px] font-medium cursor-pointer z-20 duration-300 " >
              {footerBanner.buttonText}
            </button>
          </Link>
          <img src={urlFor(footerBanner.image)} alt="keyboard" className="z-10 absolute top-16 left-[25%] h-[250px] translate-x-12 group-hover:-translate-x-12  hover:scale-105 hover:-skew-x-2 hover:skew-y-4 transition-all duration-1000 "  />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner