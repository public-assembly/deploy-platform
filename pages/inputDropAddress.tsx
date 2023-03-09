import type { NextPage } from 'next'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'

const InputDropAddress: NextPage = () => {
  const router = useRouter()

  const { dropAddress, setDropAddress } = useFormStateProvider()

  const handleClick = (e: any) => {
    router.push('/deploy')
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleClick(e)
    }
  }

  return (
    <div>
      <Seo
        title="Drop Address"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route={'./inputChain'} routeName="edit chain" />
      <HeroWrapper>
        <HeroText
          text={
            <>
              next,&nbsp;<span className="hidden sm:block"></span> what&apos;s your&nbsp;{' '}
              <span className="hidden sm:block"></span>
              <span className="pa-displayLight">drop address</span>?
            </>
          }
        />
        <Input
          value={dropAddress}
          placeholder="e.g. 0x35b29ee2D9fA05907777B19348a058F8705AA56d"
          onChange={(e: any) => setDropAddress(e.currentTarget.value)}
          onClick={handleClick}
          onKeyPress={handleKeyPress}
        />
      </HeroWrapper>
    </div>
  )
}

export default InputDropAddress
