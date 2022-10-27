import type { NextPage } from 'next'
import { Input } from 'components/Input'
import { useRouter } from 'next/router'
import { useFormStateProvider } from 'context'
import { Header } from 'components/Header'
import { ethers } from 'ethers'
import { useState } from 'react'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'

const InputCurationPass: NextPage = () => {
  const router = useRouter()

  const { curationPass, setCurationPass } = useFormStateProvider()
  const [validAddress, setValidAddress] = useState(false)

  const handleChange = (e: any) => {
    setCurationPass(e.currentTarget.value)
  }

  const handleValidation = () => {
    if (curationPass != null && ethers.utils.isAddress(curationPass)) {
      setValidAddress(true)
      router.push('/inputMedia')
    } else {
      setValidAddress(false)
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleValidation()
    }
  }

  return (
    <div>
      <Seo
        title="Pass"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route={'./inputSymbol'} routeName="edit symbol" />
      <HeroWrapper>
        <HeroText
          text={
            <>
              designate a&nbsp;<wbr></wbr>
              <span className="hidden sm:block"></span>curation&nbsp;
              <span className="pa-displayLight">pass</span>
            </>
          }
        />
        <Input
          value={curationPass}
          placeholder="e.g. 0x34fe32e6442d14d9..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          route={'./inputMedia'}
          disabled={true}
        />
        {/* {!validAddress && (
          <InputError errorMessage={'Please enter a valid NFT contract address'} />
        )} */}
      </HeroWrapper>
    </div>
  )
}

export default InputCurationPass

{
  /* <a
  className="underline text-[#006ff1] hover:text-[#0c1413]"
  href="https://create.zora.co/create/edition"
  target="_blank"
  rel="noreferrer">
  make one here
</a> */
}
