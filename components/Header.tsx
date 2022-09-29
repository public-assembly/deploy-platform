import { ConnectButton } from './ConnectButton'

type HeaderProps = {
  headerText?: string
}

export function Header({ headerText }: HeaderProps) {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      <span className="text-2xl">{headerText}</span>
      <ConnectButton />
    </header>
  )
}
