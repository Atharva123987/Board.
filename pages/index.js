import Head from 'next/head'
import { Montserrat } from 'next/font/google'
const inter = Montserrat({ subsets: ['latin'] })
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
export default function Home() {

  const handleLogin = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: `${window.location.origin}/dashboard` });
    } catch (err) {
      console.log(err);
    }
  };



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
          <h1 className='heading'>Board.</h1>
        </div>

        <div id='right-container'>

          <div id='login-container'>

            <div id='login-top'>
              <h2>Sign In</h2>
              <span>Sign in into your account</span>
            </div>

            <div>

              <div className='login-buttons'>
                <button onClick={() => handleLogin('google')}><FcGoogle />Sign in with Google</button>
                <button onClick={() => handleLogin('apple')}><AiFillApple />Sign in with Apple</button>
              </div>

              <div className='login-form'>

                <label htmlFor='email'>Email address</label>
                <input type='email' name='email' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' />

                <a>Forgot password?</a>

                <button type='submit'>Sign In</button>

              </div>

              <div id='login-form-footer'><span>Don't have an account?</span> <a>Register here</a></div>

            </div>

          </div>

        </div>

      </div>
        
    </>
  )
}
