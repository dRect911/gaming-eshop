import React from 'react'
import Link from 'next/link'


import { urlFor } from '../lib/client'

const Product = ( {product: { image, name, slug, price } } ) => {
  return (
    <div className="h-auto w-auto m-4" >
      <Link href={`/product/${slug.current}`}  >
        <div className="cursor-pointer bg-bgLight rounded-xl p-2 shadow-lg shadow-primary/25  text-primary-dark hover:scale-105 transition-all duration-500" >{/* class=product-card */}
          <img src={urlFor(image && image[0])} className="max-w-[250px] max-h-[250px] bg-bgLight rounded-lg scale-100" /> {/* class=product-image */}
          <p className="font-medium mt-1" >{name} </p> {/* class=product-name */}
          <p className="font-bold text-primary mt-[6px] " >${price} </p> {/* class=product-price */}

        </div>
      </Link>
    </div>
  )
}

export default Product