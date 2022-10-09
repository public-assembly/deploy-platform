import { ConnectButton } from './ConnectButton'
import { BackButton } from './BackButton'

export function Header({ route }: { route: string }) {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      {route != '' ? <BackButton route={route} /> : <div />}
      {/* <p className="pa-paragraph text-xl sm:text-2xl">Built by Public Assembly</p> */}
      <ConnectButton />
    </header>
  )
}
