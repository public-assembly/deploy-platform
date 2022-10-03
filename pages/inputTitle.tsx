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
        <h1 className="pa-display">
          Give your<br></br>contract a title
        </h1>
        <p className="pa-paragraph mt-8">
          Platforms that reference your contract will use this to provide a name for your
          curation. This could be general like &quot;Neosound&quot;, or more specific like
          &quot;Fall Highlights.&quot;
        </p>
        <div className="mt-32">
          <Input
            label={'Input Title'}
            placeholder="e.g. Neosound"
            onChange={(e: any) => setTitle(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        {/* <Link href="/inputSymbol">
          <a>Next</a>
        </Link> */}
      </div>
    </div>
  )
}

export default InputTitle
