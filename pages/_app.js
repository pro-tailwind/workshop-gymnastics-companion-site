import { Navbar } from '../components/navbar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
