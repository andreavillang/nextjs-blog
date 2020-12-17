import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Youtube Promotion</title>
      </Head>

      <h1>Check out my latest cover!</h1>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/876UPbnonfA" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </Layout>
  )
}