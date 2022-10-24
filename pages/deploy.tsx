import type { NextPage } from 'next'
import Head from 'next/head'
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
const metadataRenderer = '0x0000000000000000000000000000000000000000'
const metadataRendererInit = '0x'

const Deploy: NextPage = () => {
  const { title, symbol, curationPass, media } = useFormStateProvider()
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()
  const router = useRouter()

  const curationManagerAddress = address as string
  const curatorTitle = title as string
  const curatorSymbol = symbol as string
  const tokenPassAddress = curationPass as string
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

  console.log(initialListings)

  const {
    deployConfig,
    deployConfigError,
    deployWrite,
    deployWriteError,
    txnDeployStatus,
  } = useCurationFactory({
    curatorFactoryAddress,
    curationManagerAddress,
    curatorTitle,
    curatorSymbol,
    tokenPassAddress,
    initialPause,
    curationLimit,
    metadataRenderer,
    metadataRendererInit,
    initialListings,
  })

  console.log('Deploy Config: ', deployConfig)
  console.log('Config Error: ', deployConfigError)
  console.log('Write Error: ', deployWriteError)

  return (
    <div>
      <Seo
        title="Deploy"
        description="The place to begin experimenting with onchain curation."
      />
      {txnDeployStatus == 'success' ? (
        <Header route="" routeName="" />
      ) : (
        <Header route={'./inputMedia'} routeName="edit media" />
      )}

      <HeroWrapper>
        {txnDeployStatus !== 'success' ? (
          <HeroText
            text={
              <>
                ready to create&nbsp;<span className="hidden sm:block"></span>
                <wbr></wbr>
                <span className="pa-displayLight">{`${title}?`}</span>
              </>
            }
          />
        ) : (
          <div className="flex flex-col gap-6 sm:gap-8">
            <HeroText
              text={
                <>
                  bring your platform&nbsp;<wbr></wbr>
                  <span className="hidden sm:block"></span>to&nbsp;
                  <span className="pa-displayLight">life</span>
                </>
              }
            />
            <VercelDeploy />
          </div>
        )}

        {isConnected ? (
          <>
            {txnDeployStatus == 'idle' ? (
              <div>
                <button
                  disabled={Boolean(chain)}
                  className="flex items-center gap-1 ml-1 sm:ml-2 pa-paragraph"
                  onClick={() => deployWrite?.()}>
                  <div className="flex items-center sm:hover:text-[#ecf1f0]">
                    <span className="mb-1">deploy your contract</span>
                    <IoIosArrowRoundForward className="text-3xl sm:text-4.5" />
                  </div>
                </button>
              </div>
            ) : txnDeployStatus == 'loading' ? (
              <div className="flex items-center gap-2 ml-1 sm:ml-2 pa-paragraph">
                <span className="mb-1">deploying your contract</span>
                <IoIosRadioButtonOn className="animate-ping" size={8} />
              </div>
            ) : null}
          </>
        ) : (
          <span className="ml-1 sm:ml-2">
            <ConnectButton connectText="please connect your wallet" />
          </span>
        )}
      </HeroWrapper>
    </div>
  )
}

export default Deploy
