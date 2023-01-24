import '../styles/globals.css'
import DefaultLayout from '../layouts/DefaultLayout'

// Import Flow config
import '../config/fcl.js'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  )
}

export default MyApp
