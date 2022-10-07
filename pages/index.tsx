import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  IoMdReturnRight,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from 'react-icons/io'
import { useRouter } from 'next/router'
import { Header } from 'components/Header'
import { HeroText } from 'components/HeroText'

const Home: NextPage = () => {
  const router = useRouter()

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputTitle')
    }
  }

  const handleClick = (e: any) => {
    router.push('/inputTitle')
  }

  return (
    <div>
      <Head>
        {/*
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <Header route="" />
      <div className="mx-6 mt-20 sm:mt-16 sm:mx-8">
        <HeroText
          text={
            <>
              Create your <br className="hidden sm:block"></br>own
            </>
          }
          highlight=" platform"
        />
        <Link href={'./inputTitle'}>
          <a>
            <button className="flex items-center justify-between gap-4 w-full mt-8 text-2xl pa-paragraph pa-input h-20 px-6 hover:bg-slate-50 sm:w-1/6 sm:justify-center">
              <p className="mb-1">Get Started</p>
              <IoIosArrowRoundForward size={32} />
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
