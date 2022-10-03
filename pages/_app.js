import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {useEffect} from 'react'
import Layout from './components/Layout';





function MyApp({ Component, pageProps }) {



  return  (

  <Layout>
    <Component {...pageProps} />
   
  </Layout>
  )
}

export default MyApp
