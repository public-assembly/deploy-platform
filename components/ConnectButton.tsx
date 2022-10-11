import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { connect } from 'http2'

export function ConnectButton({ connectText, ...props }: { connectText: string }) {
  return (
    <div className="connect-button-wrapper relative overflow-hidden " {...props}>
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
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
                if (chain.unsupported) {
                  return (
                    <div className="text-red-400 pa-paragraph ">
                      &#x26A0; wrong network
                    </div>
                  )
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
