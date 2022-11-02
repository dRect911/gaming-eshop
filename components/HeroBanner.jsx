import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


/* 

buttonText
: 
"SHOP NOW"
desc
: 
"The G413 keyboard was designed and engineered to deliver advanced performance through an ideal feature set."
discount
: 
"30% OFF"
image
: 
{_type: 'image', asset: {…}}
largeText1
: 
"SPEED"
largeText2
: 
"QUIET"
midText
: 
"Hot Sale"
product
: 
"Logitech G413 Mechanical Keyboard"
saleTime
: 
"25 Oct to 12 Nov"
smallText
: 
"Logitech G413"
*/

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="relative w-full h-[500px] py-10 px-[100px] bg-bgLight leading-none group " >
        <div>
            <p className="text-[20px] " >{heroBanner.smallText}</p>
            <h3 className="text-[4rem] mt-1 font-semibold text-primary-light " >{heroBanner.midText}</h3>
            <h1 className="text-[10em] -ml-[20px] font-bold uppercase text-primary " >{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt="keyboard" className="absolute top-0 right-[20%]  h-[450px] -translate-x-48 group-hover:translate-x-48 hover:scale-105 hover:-skew-x-6 hover:skew-y-12 transition-all duration-1000 "  /> {/* hero-banner-image */}

            <div>
                <Link href={`/product/${heroBanner.product}`} >
                    <button type="button" className=" py-[10px] px-4 bg-secondary text-white hover:bg-secondary-light hover:text-secondary-dark transition-all hover:-translate-y-1 hover:scale-105  mt-10 text-[18px] font-medium cursor-pointer z-[1000] duration-300 " >
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