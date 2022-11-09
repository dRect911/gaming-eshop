import { SessionProvider } from "next-auth/react"
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  return (
    <StateContext>
      <SessionProvider session={session} >
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </StateContext>
  )
}

export default MyApp
