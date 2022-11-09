/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const FooterBanner = ( {footerBanner} ) => {
  return (
    <div className="rounded-2xl relative bg-secondary dark:bg-primary-dark text-white mt-32 w-full leading-none  p-4 lg:px-12 lg:py-6 xl:px-24 xl:py-10 group transition-all" > {/* footer-banner-container */}
      <div className="flex justify-between flex-wrap lg:flex-nowrap lg:gap-16 xl:gap-56" > {/* banner-desc */}
        <div className="" > {/* left */}
          <p className="m-4 mb-4 text-xl sm:text-2xl md:text-xl font-bold text-secondary-dark dark:text-bgDark animate-pulse "> {footerBanner.discount} </p>
          <h3 className="dark:text-bgLight/75 font-black text-[60px] sm:text-[100px] md:text-[110px] lg:text-[90px] ml-[25px] group-hover:translate-x-6 transition-all duration-1000 group-hover:-skew-x-12 "> {footerBanner.largeText1} </h3>
          <h3 className="dark:text-bgLight/75 font-black text-[60px] sm:text-[100px] md:text-[110px] lg:text-[90px] ml-[25px] translate-x-6 group-hover:-translate-x-6 transition-all duration-1000 group-hover:opacity-50"> {footerBanner.largeText2} </h3>
          <p className="m-4 text-secondary-light dark:text-primary-light text-normal sm:text-lg md:text-md "> {footerBanner.saleTime} </p>
        </div>
        <div className="leading-snug group mt-24 md:mt-12 lg:mt-6  transition-all " > {/* right */}
          <p className="text-[18px] md:text-[20px] dark:text-primary-light "> {footerBanner.smallText} </p>
          <h3 className="font-extrabold text-[50px] sm:text-[65px] md:text-[80px] lg:text-[70px]  transition-all"> {footerBanner.midText} </h3>
          <p className="text-[14px] sm:text-[18px] md:text-[22px] xl:text-[18px] text-secondary-light dark:text-primary-light lg:mt-48 xl:mt-0 transition-all"> {footerBanner.desc} </p>
          <Link href={`/product/${footerBanner.product}`} >
            <button type="button" className="rounded-lg py-[10px] px-4 bg-secondary-dark dark:bg-bgDark/50 text-secondary-light dark:text-primary-light hover:bg-secondary-light dark:hover:bg-primary-light hover:text-secondary-dark dark:hover:text-primary-dark border-2 border-secondary-dark dark:border-bgDark transition-all hover:font-bold  mt-10 text-[18px] md:text-[22px] lg:text-[18px] font-medium cursor-pointer z-20 duration-300 " >
              {footerBanner.buttonText}
            </button>
          </Link>
          <img src={urlFor(footerBanner.image)} alt="keyboard" className="z-10 absolute top-36 sm:top-44 md:top-20 lg:top-32 xl:top-4 left-[25%] sm:left-[35%] md:left-[40%] lg:left-[25%] h-40 sm:h-64 md:h-[300px] lg:h-64 translate-x-12 group-hover:-translate-x-12 xl:group-hover:-translate-x-20  hover:scale-105 hover:-skew-x-2 hover:skew-y-4 transition-all duration-1000 "  />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner