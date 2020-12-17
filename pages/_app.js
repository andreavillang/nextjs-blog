import '../styles/globals.css'

//for css to be loaded in every page us this component

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
