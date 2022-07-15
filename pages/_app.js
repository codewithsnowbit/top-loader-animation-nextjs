import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
