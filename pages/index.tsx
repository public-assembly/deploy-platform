import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useRouter } from 'next/router'
import { Header } from 'components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'

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
      <Seo
        title="Deploy"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route="https://www.neosound.xyz/" routeName='neosound'/>
      <HeroWrapper>
        <HeroText
          text={
            <>
              create your&nbsp;<wbr></wbr>
              <span className="hidden sm:block"></span>own&nbsp;
              <span className="pa-displayLight">platform</span>
            </>
          }
        />
        <Link href={'./inputTitle'}>
          <a>
            <button className="flex items-center gap-1 ml-1 sm:ml-2 pa-paragraph sm:hover:text-[#ecf1f0]">
              <span className="mb-1">get started</span>
              <IoIosArrowRoundForward size={32} />
            </button>
          </a>
        </Link>
      </HeroWrapper>
    </div>
  )
}

export default Home
