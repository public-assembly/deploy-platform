import type { NextPage } from 'next'
import { ContinueButton } from 'components/ContinueButton'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from 'components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'
import DropDown from 'components/DropDown'
import { useEffect, useState } from 'react'
import { allChains } from 'wagmi'

const InputChain: NextPage = () => {
  const router = useRouter()
  const [chainSelected, setChainSelected] = useState('')

  const { chainId, setChainId } = useFormStateProvider()

  const handleClick = (e: any) => {
    router.push('/inputDropAddress')
  }

  useEffect(() => {
    const selectedChain = allChains.find((chain) => chain.id === chainId)
    if (selectedChain) {
      setChainSelected(selectedChain.name)
    }
  }, [])

  const handleChange = (chain: { name: string; id: number }) => {
    setChainId(chain.id)
    setChainSelected(chain.name)
  }

  return (
    <div>
      <Seo
        title="Title"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route="" routeName="" />
      <HeroWrapper>
        <HeroText
          text={
            <>
              to begin,&nbsp;<span className="hidden sm:block"></span>what&apos;s
              your&nbsp;<span className="hidden sm:block"></span>
              <span className="pa-displayLight">drop chain?</span>
            </>
          }
        />
        <DropDown placeholder="Chain" onChange={handleChange} value={chainSelected} />
        {chainId ? <ContinueButton onClick={handleClick} /> : ''}
      </HeroWrapper>
    </div>
  )
}

export default InputChain
