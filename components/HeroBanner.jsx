import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'



const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="relative rounded-2xl w-full h-[500px] py-10 px-[100px] mt-20 bg-primary-light leading-none group " >
        <div>
            <p className="text-[20px] text-primary-dark " >{heroBanner.smallText}</p>
            <h3 className="text-[4rem] mt-1 font-semibold text-bgLight " >{heroBanner.midText}</h3>
            <h1 className="text-[10em] -ml-[20px] font-bold uppercase text-primary " >{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt="keyboard" className="absolute top-0 right-[20%]  h-[450px] -translate-x-8 group-hover:translate-x-8 hover:scale-105 hover:-skew-x-2 hover:skew-y-4 transition-all duration-1000 "  /> {/* hero-banner-image */}

            <div>
                <Link href={`/product/${heroBanner.product}`} >
                    <button type="button" className="rounded-lg py-[10px] px-4 bg-secondary text-white hover:bg-bgLight hover:text-primary-dark transition-all hover:translate-x-2 hover:font-bold  mt-10 text-[22px] font-medium cursor-pointer z-20 duration-300 " >
                    {heroBanner.buttonText}
                    </button>
                </Link>
                <div className="absolute w-[350px] flex flex-col right-[10%] bottom-[5%]  " >
                    <h5 className="text-primary-dark mb-3 text-[16px] font-bold self-end  " >Description</h5>
                    <p className="text-primary-dark font-extralight text-end " >{heroBanner.desc}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner