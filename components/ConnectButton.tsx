import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { connect } from 'http2'

export function ConnectButton({ connectText, ...props }: { connectText: string }) {
  return (
    <div className="connect-button-wrapper relative overflow-hidden " {...props}>
      <RKConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openConnectModal,
          openChainModal,
          mounted,
        }) => {
          return (
            <>
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <button
                      onClick={openConnectModal}
                      className="pa-paragraph sm:hover:text-[#ecf1f0] ">
                      {connectText}
                    </button>
                  )
                }
                if (chain.id !== 1) {
                  <button onClick={openChainModal}>
                    return{' '}
                    <div className=" text-red-400 pa-paragraph ">wrong network</div>
                  </button>
                }
                return (
                  <button onClick={openAccountModal}>
                    <div className="flex items-center gap-2 lowercase pa-paragraph sm:hover:text-[#ecf1f0]">
                      {account.displayName}
                    </div>
                  </button>
                )
              })()}
            </>
          )
        }}
      </RKConnectButton.Custom>
    </div>
  )
}
