import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
    {/* hero banner here */}
      <HeroBanner />

      <div className="text-center mx-[40px] text-primary bg-bgLight   ">
        <h2 className="text-[40px] font-bold ">Best Selling Products</h2>
        <p className="text-[16px] text-slate-800  ">Keyboards for any type of strokes</p>
      </div>


    {/* Products fetched here */}
      <div>
        { ['Product 1', 'Product 2'].map((product) => product ) }
      </div>
    
    {/* Footer */}
    <FooterBanner />
    
    </>
  )
}

export default Home