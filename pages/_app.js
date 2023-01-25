import '../styles/globals.css'
import DefaultLayout from '../layouts/DefaultLayout'

// Import Flow config
import '../config/fcl.js'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
