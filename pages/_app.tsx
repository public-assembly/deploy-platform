import 'styles/globals.css'
import 'styles/publicassembly.css'
import type { AppProps } from 'next/app'
import { AppWrapper, PageWrapper } from './../components'
import { FormStateProvider } from '../context'

function DeployPlatform({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <FormStateProvider>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </FormStateProvider>
    </AppWrapper>
  )
}

export default DeployPlatform
