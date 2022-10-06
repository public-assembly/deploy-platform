import type { NextPage } from 'next'
import Head from 'next/head'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'

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
      <div className="mx-8 mt-24">
        <h1 className="pa-displayDark unselectable text-5xl md:text-9xl lg:text-12xl">
          Choose a<br></br>curation <span className="pa-displayLight">symbol</span>
        </h1>
        <p className="pa-paragraph text-xl mt-8 mb-8 sm:text-3xl max-w-7xl">
          Your contract symbol can be used to distinguish your contract from those of
          other creators. Try using the first few characters of your contract title or
          maybe removing all the vowels.
        </p>
        <div className="mt-4 sm:mt-20">
          <Input
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
