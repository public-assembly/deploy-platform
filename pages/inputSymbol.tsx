import type { NextPage } from 'next'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'

const InputSymbol: NextPage = () => {
  const router = useRouter()

  const { symbol, setSymbol } = useFormStateProvider()

  const handleClick = (e: any) => {
    router.push('/inputSymbol')
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputCurationPass')
    }
  }

  return (
    <div>
      <Seo
        title="Symbol"
        description="The place to begin experimenting with onchain curation."
      />
      <Header route={'./inputTitle'} routeName="edit title" />
      <HeroWrapper>
        <HeroText
          text={
            <>
              next,&nbsp;<span className="hidden sm:block"></span>choose a&nbsp;
              <span className="pa-displayLight">symbol</span>
            </>
          }
        />
        <Input
          value={symbol}
          placeholder="e.g. NEO"
          onChange={(e: any) => setSymbol(e.currentTarget.value)}
          onClick={handleClick}
        />
      </HeroWrapper>
    </div>
  )
}

export default InputSymbol
