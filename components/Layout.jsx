import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

//TODO gotta favicon to NEXT 13 one

const Layout = ( {children} ) => {
  return (
    <div className=" bg-bgLight " >{/* layout */}
      <Head>
        <title>G-SHOP</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="w-full px-4 md:px-2  xl:max-w-[1600px] p-[10px] m-auto ">{/* main-container */}
        {children}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout