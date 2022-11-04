import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ( {children} ) => {
  return (
    <div className=" bg-bgLight " >{/* layout */}
      <Head>
        <title>G-SHOP</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="max-w-[1600px] p-[10px] m-auto w-full ">{/* main-container */}
        {children}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout