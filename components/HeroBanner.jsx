/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'



const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="relative rounded-2xl w-full h-[500px] py-6 md:py-10 px-2 md:px-[70px] lg:px-[100px] mt-16 md:mt-20 bg-primary-light dark:bg-secondary/90 leading-none group " >
        <div>
            <p className="text-[16px] text-center md:text-start md:text-[20px] text-primary-dark dark:text-secondary-dark transition-all" >{heroBanner.smallText}</p>
            <h3 className="text-[3rem] md:text-[4rem] text-center md:text-start mt-2 md:mt-1 font-semibold text-bgLight dark:text-secondary-light transition-all" >{heroBanner.midText}</h3>
            <h1 className="text-[6em] sm:text-[8em] md:text-[10em] text-center md:text-start md:-ml-[20px] font-bold uppercase text-primary dark:text-secondary-dark transition-all" >{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt="keyboard" className="absolute top-72 sm:top-64 md:top-32 lg:top-12 xl:top-0 right-[20%] md:right-[5%] lg:right-[10%] xl:right-[20%] h-44 sm:h-56 md:h-[280px] lg:h-[350px] xl:h-[450px] -translate-x-8 group-hover:translate-x-8 xl:group-hover:translate-x-16 hover:scale-105 hover:-skew-x-2 hover:skew-y-4 transition-all duration-1000 "  /> {/* hero-banner-image */}

            <div>
                <Link href={`/product/${heroBanner.product}`} >
                    <button type="button" className="rounded-lg py-[10px] px-4 md:py-[12px] md:px-6 bg-secondary dark:bg-secondary-dark/50 text-white hover:bg-bgLight dark:hover:bg-secondary-dark hover:text-primary-dark dark:hover:text-secondary-light transition-all hover:translate-x-2 hover:font-bold ml-6 sm:ml-12 md:ml-0 mt-10 sm:mt-6 md:mt-10 text-[22px] md:text-[26px] font-medium cursor-pointer z-20 duration-300 " >
                    {heroBanner.buttonText}
                    </button>
                </Link>
                <div className="absolute w-[250px] sm:w-[300px] md:w-[350px] flex flex-col right-[10%] bottom-[5%]  " >
                    <h5 className="text-primary-dark dark:text-secondary-light mb-3 text-sm md:text-[16px] lg:text-[18px] font-bold self-end  " >Description</h5>
                    <p className="text-primary-dark dark:text-secondary-light text-[12px] sm:text-[14px] md:text-normal lg:text-[16px] font-light text-end " >{heroBanner.desc}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner