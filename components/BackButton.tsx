import { IoIosArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

export type BackButtonProps = {
  route: string
  routeName: string
}

export const BackButton = ({ route, routeName }: BackButtonProps) => {
  return (
    <Link href={route}>
      <a>
        <button>
          <div className="flex items-center gap-1 pa-paragraph transition ease-in-out sm:hover:text-[#ecf1f0]">
            <IoIosArrowRoundBack className="text-3xl sm:text-4.5" />
            <span className="hidden mb-2 sm:block">{routeName}</span>
          </div>
        </button>
      </a>
    </Link>
  )
}
