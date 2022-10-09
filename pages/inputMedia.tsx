import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'
import { useState } from 'react'
import { ethers } from 'ethers'
import { HeroText } from 'components/HeroText'
import { ContinueButton } from 'components/ContinueButton'

const InputMedia: NextPage = () => {
  const router = useRouter()

  const { media, setMedia } = useFormStateProvider()
  const [validMedia, setValidMedia] = useState(false)

  const handleChange = (e: any) => {
    setMedia(e.currentTarget.value)
  }

  const handleValidation = () => {
    if (media != null && ethers.utils.isAddress(media)) {
      setValidMedia(true)
      router.push('/deploy')
    } else {
      setValidMedia(false)
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleValidation()
    }
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
      <Header route={'./inputCurationPass'} />
      <div className="flex flex-col gap-6 mt-12 sm:mt-16 sm:gap-8">
        <HeroText
          text={
            <>
              input your&nbsp;<wbr></wbr><span className='hidden sm:block'></span>first&nbsp;
              <span className="pa-displayLight">song</span>
            </>
          }
        />
        <Input
          value={media}
          placeholder="e.g. 0x24535b3be22f1dbc..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          route={'./deploy'}
        />
      </div>
    </div>
  )
}

export default InputMedia

/* <button
onClick={() => router.push('/deploy')}
className="underline text-[#006ff1] hover:text-[#0c1413]">
skip ahead!
</button> */
