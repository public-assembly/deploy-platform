import type { NextPage } from 'next'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'
import { useState } from 'react'
import { ethers } from 'ethers'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'
import { InputError } from 'components/InputError'

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

  const handleClick = (e: any) => {
    handleValidation()
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleValidation()
    }
  }

  return (
    <div>
      <Seo
        title="Media"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route={'./inputCurationPass'} routeName="edit curation pass" />
      <HeroWrapper>
        <HeroText
          text={
            <>
              input your&nbsp;<wbr></wbr>
              <span className="hidden sm:block"></span>first&nbsp;
              <span className="pa-displayLight">song</span>
            </>
          }
        />
        <Input
          value={media}
          placeholder="e.g. 0x24535b3be22f1dbc..."
          onChange={handleChange}
          onClick={handleClick}
        />
        {!validMedia && (
          <InputError errorMessage={'Please enter a valid Ethereum address'} />
        )}
      </HeroWrapper>
    </div>
  )
}

export default InputMedia
