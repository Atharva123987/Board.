import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Montserrat } from 'next/font/google'
const inter = Montserrat({ subsets: ['latin'] })
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board.</title>
        <meta name="description" content="Auth and Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='container'>

      <div id='left-container'>
        <h1 id='heading'>Board.</h1>
      </div>

      <div id='right-container'>

        <div id='login-container'>

        <div id='login-top'>
        <h2>Sign In</h2>
        <span>Sign in into your account</span>
        </div>

        <div>

          <div className='login-buttons'>
          <button><FcGoogle/>Sign in with Google</button>
          <button><AiFillApple/>Sign in with Apple</button>
          </div>

          <div className='login-form'>
          <label htmlFor='email'>Email address</label>
          <input type='email' name='email'/>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'/>

          <a>Forgot password?</a>

          <button type='submit'>Sign In</button>

          </div>

          <div style={{color:"#858585", fontFamily:"Lato", padding:"10px", display:"flex", justifyContent:"center"}}><span>Don't have an account?</span> <a>Register here</a></div>

        </div>
        </div>
      </div>

      </div>
    </>
  )
}
