import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Montserrat } from 'next/font/google'
const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Board.</title>
        <meta name="description" content="Auth and Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div id='heading'>Board.</div>

    </>
  )
}
