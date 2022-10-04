import { ConnectButton } from './ConnectButton'
import { BackButton } from './BackButton'

type BackButtonProps = {
  route: string
}

export function Header({ route }: BackButtonProps) {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      {route != '' ? <BackButton route={route} /> : <div />}
      <ConnectButton />
    </header>
  )
}
