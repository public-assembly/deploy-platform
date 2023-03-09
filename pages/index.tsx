import type { NextPage } from 'next'
import { useFormStateProvider } from 'context'
import { useAccount, useNetwork } from 'wagmi'
import { useCurationFactory } from '@public-assembly/curation-interactions'
import { IoIosArrowRoundForward, IoIosRadioButtonOn } from 'react-icons/io'
import { Header } from '../components/Header'
import { HeroText } from 'components/HeroText'
import { HeroWrapper } from 'components/HeroWrapper'
import { useRouter } from 'next/router'
import { ConnectButton } from 'components/ConnectButton'
import { VercelDeploy } from 'components/VercelDeploy'
import { Seo } from 'components/Seo'

type initialListings = any[]

const curatorFactoryAddress = '0xcc0ddff0ea076AbfB837117C5AaC6f48483e5B98'
const initialPause = false
const curationLimit = 0
const metadataRenderer = '0x7D6A95869D1c75fADAF7fECB7Cfa43037A450232'
const metadataRendererInit = '0x'

const Deploy: NextPage = () => {
  const { title, symbol, curationPass, media } = useFormStateProvider()
  const { address, isConnected } = useAccount()
  const initialListings = [] as initialListings

  if (media != '') {
    initialListings.push(
      Object.values({
        curatedAddress: media,
        selectedTokenId: 0,
        curator: address,
        curationTargetType: 6,
        sortOrder: 0,
        hasTokenId: false,
        chainId: 4,
      })
    )
  }

  return (
    <div>
      <Seo title="Drop Page" description="Drop music on your own custom domain." />
      <Header
        route="https://github.com/SweetmanTech/deploy-platform"
        routeName="open source"
      />
      <HeroWrapper>
        <div className="flex flex-col gap-6 sm:gap-8">
          <HeroText
            text={
              <>
                create your&nbsp;<wbr></wbr>
                <span className="hidden sm:block"></span>own&nbsp;
                <span className="pa-displayLight">drop page</span>
              </>
            }
          />
          <VercelDeploy />
        </div>
      </HeroWrapper>
    </div>
  )
}

export default Deploy
