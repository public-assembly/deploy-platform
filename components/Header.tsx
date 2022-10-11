import { ConnectButton } from './ConnectButton'
import { BackButton } from './BackButton'
import { useRouter } from 'next/router'

export function Header({ route, routeName }: { route: string; routeName: string }) {
  const router = useRouter()

  return (
    <header className="flex flex-row justify-between items-center w-full">
      {route == '' ? <div></div> : <BackButton route={route} routeName={routeName} />}
      {router.asPath == '/deploy' ? <ConnectButton connectText='connect wallet' /> : null}
    </header>
  )
}
