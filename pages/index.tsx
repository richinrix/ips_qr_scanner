import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center">
        <div className="px-5 py-10 shadow-xl w-full ">
          <div className="text-base my-5 text-center w-full">
            Please login to scan QR
          </div>
          <a href="/login" className="rounded-md bg-black text-white text-center text-xl px-6 py-2">
            Login 
          </a>
        </div>
      </main>

      
    </div>
  )
}

export default Home
