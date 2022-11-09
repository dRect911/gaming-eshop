/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../../lib/client'
import {HiMinus, HiPlus, HiStar, HiOutlineStar} from 'react-icons/hi2'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { incQty, decQty, setQty, qty, onAdd, setShowCart } = useStateContext();
    
    useEffect(() => {
        setQty(1);
    }, []);

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

    return (
    <div className="w-full" >
        <div className="w-full flex flex-wrap md:flex-nowrap gap-10 justify-between mt-16 text-bgDark ">{/* product detail container */}
            <div className="md:pl-6" >
                <div className="">{/* image container */}
                    <img src={urlFor(image[index])} alt="product image" className="bg-bgLight hover:bg-secondary-light border border-secondary-light rounded-xl min-h-[200px] max-w-full md:min-h-[300px] md:max-w-[450px] lg:min-h-[400px] lg:max-w-[600px] md:shrink-0 transition-all " />
                </div>

                {/* mini images */}
                <div className="flex flex-wrap gap-2 mt-5" >
                    {image?.map((item, i) => (
                        <img 
                        key={i} 
                        alt=""
                        src={urlFor(item)}
                        className={` ${ i === index ? 'border-secondary bg-secondary' : 'border-secondary-light bg-secondary-light' } rounded-lg cursor-pointer border max-w-[50px] max-h-[50px] md:max-w-[70px] md:max-h-[70px] transition-all`}
                        onMouseEnter={() => setIndex(i) }
                        />
                    ))}
                </div>
                
            </div>
            <div className="max-w-full md:max-w-[500px] py-4 md:pr-6 " >{/* products details desc */}
                <h1 className="text-2xl font-semibold text-primary-dark" >{name}</h1>

                <div className="flex gap-1 items-center">{/* reviews */}
                    <div className="flex gap-1 text-secondary" >
                        <HiStar/>
                        <HiStar/>
                        <HiStar/>
                        <HiStar/>
                        <HiOutlineStar/>
                    </div>
                    <p> (27) </p>
                </div>

                <h4 className="text-lg font-medium mt-2">Details: </h4>
                <p className="mt-1">{details}</p>
                <p className="mt-8 font-bold text-secondary text-2xl sm:text-3xl md:text-2xl transition-all ">${price}</p>{/* price */}

                <div className="mt-2 flex gap-5 items-center select-none" >{/* Quantity */}
                    <h3 className="text-lg font-medium  text-primary-dark" >Quantity: </h3>
                    <span className="flex items-center w-auto bg-white border border-primary-dark rounded p-1" >{/* qty desc */}
                        <span onClick={decQty} className="flex shrink-0 items-center justify-center cursor-pointer  border-r  text-bgDark hover:text-primary  w-8 h-8 rounded-l transition-all"><HiMinus/></span>
                        <span className="flex shrink-0 items-center justify-center cursor-pointer text-primary-dark w-8 h-8 ">{qty}</span>
                        <span onClick={incQty} className="flex shrink-0 items-center justify-center cursor-pointer border-l  text-bgDark hover:text-primary  w-8 h-8 rounded-r transition-all"><HiPlus/></span>
                    </span>
                </div>

                {/* buttons */}
                <div className="w-full flex flex-wrap gap-4 justify-around  transition-all select-none" >
                    <button type="button" onClick={() => { onAdd(product, qty) }} className="py-4 px-6 w-[220px] mt-10 text-xl cursor-pointer hover:scale-105 font-medium border bg-white border-secondary text-secondary hover:border-secondary-dark hover:text-secondary-dark hover:bg-secondary-light hover:font-semibold transition-all rounded-lg " >Add to cart</button>
                    <button type="button" onClick={handleBuyNow}  className="py-4 px-6 w-[220px] mt-10 text-xl cursor-pointer hover:scale-105 font-medium border bg-secondary-dark border-secondary-dark text-secondary-light hover:border-secondary hover:text-white hover:bg-secondary hover:font-semibold transition-all rounded-lg " >Buy now</button>
                </div>

            </div>
            
        </div>

        <div className="mt-32  " >{/* maylike warapper */}
            <h2 className="m-12 text-primary-dark text-2xl text-center font-semibold " >You may also like</h2>
            <div className="w-full h-[400px] relative overflow-x-hidden "> {/* maarquee text: text-[30px] text-semibold mx-16 text-secondary */}
                <div className="flex gap-4 mt-5 justify-center w-[180%] will-change-transform absolute whitespace-nowrap animate-marquee  pause " >{/* products container */}
                    {products?.map((product) => <Product key={product._id} product={product} /> )}
                </div>
            </div>
        </div>

    </div>
  )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: {slug} }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { product, products }
    }
  }

export default ProductDetails