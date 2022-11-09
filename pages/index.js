import React from 'react';
import dynamic from 'next/dynamic';
// import Masonry from 'masonry-layout';
const Layout = dynamic(() => import('react-masonry-list'), {
  ssr: false,
});

import Typed from 'typed.js'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components'



const Home = ({ products, bannerData }) => {

  /* masonry */
  /* const productsElements = products?.map((product) =>  <Product key={product._id} product={product}/>)
  var grid = document.querySelector('.mGrid');
  var msnry = new Masonry( grid, {
    columnWidth: 500
  });
  msnry.layout(); */

  /* typed.js */
  /* var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  }); */

  return (
    <>
    {/* hero banner here */}
      <HeroBanner heroBanner={ bannerData.length && bannerData[0]} />
      {console.log(bannerData)}

      <div className="text-center px-[40px] text-primary dark:text-primary-light mt-2 py-2 bg-bgLight dark:bg-bgDark  ">
        <h2 className="text-[26px] sm:text-[33px] md:text-[40px] font-bold transition-all">Best Selling Products</h2>
        <p className="text-[14px] md:text-[16px] text-primary-dark dark:text-primary-light">Keyboards for any type of strokes</p>
      </div>


    {/* Products fetched here */}
    { }
      <div className="flex flex-wrap gap-4 pt-5 justify-center w-full bg-bgLight dark:bg-bgDark " >
        { products?.map((product) => <Product key={product._id} product={product} /> ) }
      </div>

    {/* Masonry Layout w-[270px] */}

      {/* <div className="text-center  mx-[40px] text-secondary my-8 ">
        <h2 className="text-[40px] font-bold ">Best Selling Products</h2>
        <p className="text-[16px]  text-secondary-light ">Keyboards for any type of strokes</p>
      </div>

      <Layout 
        minWidth={270}
        colCount={5}
        gap={0}
        className=""
        items ={ products?.map((product) => <Product key={product._id} product={product} /> ) } 
      >
      
      </Layout> */}

    {/* typed.js */}
    {/* <div id="typed-strings">
      <p>Typed.js is a <strong>JavaScript</strong> library.</p>
      <p>It <em>types</em> out sentences.</p>
    </div>
    <span id="typed"></span> */}

    
    {/* Footer */}
    <FooterBanner footerBanner={ bannerData && bannerData[0]} />
    
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