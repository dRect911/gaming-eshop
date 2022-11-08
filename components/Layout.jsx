import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

//TODO gotta favicon to NEXT 13 one
//TODO auth
//TODO pagination
//TODO search feature
//TODO discounts
//TODO "add to cart" button on product card
//TODO dark mode

const Layout = ( {children} ) => {
  return (
    <div className=" bg-bgLight " >{/* layout */}
      <Head>
        <title>G-SHOP</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="w-full px-4 lg:px-3 max-w-[1600px] p-[10px] m-auto transition-all ">{/* main-container */}
        {children}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout