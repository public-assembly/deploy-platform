import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Input } from 'components/Input'
import { useFormStateProvider } from 'context'
import { useRouter } from 'next/router'

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
      <Head>
        {/*
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        */}
      </Head>
      <div className="px-8">
        <Input
          label={'Input Title'}
          placeholder="e.g. Neosound"
          onChange={(e: any) => setTitle(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
        />
        <br></br>
        {/* <Link href="/inputSymbol">
          <a>Next</a>
        </Link> */}
      </div>
    </div>
  )
}

export default InputTitle
