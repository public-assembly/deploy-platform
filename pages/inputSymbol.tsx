import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'

const InputSymbol: NextPage = () => {
  const router = useRouter()

  const { symbol, setSymbol } = useFormStateProvider()

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      router.push('/inputCurationPass')
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
      <Header route={'./inputTitle'} />
      <div className="flex flex-col gap-2 mx-6 mt-20 sm:mt-16 sm:mx-8 sm:gap-8">
        <HeroText
          text={<>Choose a <br className="hidden sm:block"></br>curation</>}
          highlight=" symbol"
        />
        <div>
          <p className="pa-paragraph text-xl mt-4 mb-8 sm:text-3xl max-w-7xl">
            Your contract symbol can be used to distinguish your contract from those of
            other creators. Try using the first few characters of your contract title or
            maybe removing all the vowels.
          </p>
          <Input
            value={symbol}
            placeholder="e.g. $NEO"
            onChange={(e: any) => setSymbol(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

export default InputSymbol
