import NextNProgress from 'nextjs-progressbar'
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import { createClient, chain, configureChains, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { SWRConfig } from 'swr'
import '@rainbow-me/rainbowkit/styles.css'

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY })]
)

console.log('Alchemy key: ', process.env.ALCHEMY_API_KEY)

const { connectors } = getDefaultWallets({
  appName: 'Deploy Platform',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={chain.goerli}
        coolMode
        theme={lightTheme({
          accentColor: 'black',
          borderRadius: 'large',
        })}>
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}>
          <NextNProgress
            color="rgba(0,0,0,.5)"
            startPosition={0.125}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          {children}
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
