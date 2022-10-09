import { ConnectButton } from './ConnectButton'
import { BackButton } from './BackButton'

export function Header({ route }: { route: string }) {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      {route != '' ? <BackButton route={route} /> : <div />}
      <ConnectButton />
    </header>
  )
}
