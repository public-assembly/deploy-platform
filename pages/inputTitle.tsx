import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from 'components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { Seo } from 'components/Seo'

const InputTitle: NextPage = () => {
  const router = useRouter()

  const { title, setTitle } = useFormStateProvider()
  console.log('title: ', title)

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputSymbol')
    }
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
              to begin,&nbsp;<span className="hidden sm:block"></span>title your&nbsp;
              <span className="pa-displayLight">contract</span>
            </>
          }
        />
        <Input
          value={title}
          placeholder={'e.g. Neosound'}
          onChange={(e: any) => setTitle(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          route={'./inputSymbol'}
        />
      </HeroWrapper>
    </div>
  )
}

export default InputTitle
