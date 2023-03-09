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
import { InputError } from 'components/InputError'

const InputCurationPass: NextPage = () => {
  const router = useRouter()

  const { curationPass, setCurationPass } = useFormStateProvider()
  const [validAddress, setValidAddress] = useState(true)

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
        title="Pass"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route={'./inputDropAddress'} routeName="edit symbol" />
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
          validInput={validAddress}
          onClick={handleClick}
        />
        {!validAddress && (
          <InputError errorMessage={'Please enter a valid Ethereum address'} />
        )}
      </HeroWrapper>
    </div>
  )
}

export default InputCurationPass
