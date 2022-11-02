import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <>
    {/* hero banner here */}
      <HeroBanner heroBanner={ bannerData.length && bannerData[0]} />
      {console.log(bannerData)}

      <div className="text-center mx-[40px] text-primary    ">
        <h2 className="text-[40px] font-bold ">Best Selling Products</h2>
        <p className="text-[16px] text-slate-800  ">Keyboards for any type of strokes</p>
      </div>


    {/* Products fetched here */}
      <div>
        { products?.map((product) => product.name ) }
      </div>
    
    {/* Footer */}
    <FooterBanner />
    
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home