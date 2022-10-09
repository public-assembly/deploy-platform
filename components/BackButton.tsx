import { IoIosArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

type BackButtonProps = {
  route: string
}

export const BackButton = ({ route }: BackButtonProps) => {
  return (
    <Link href={route}>
      <a>
        <button>
          <div className="flex items-center gap-1 hover:text-white">
            <IoIosArrowRoundBack size={32} />
            <span className="hidden pa-paragraph mb-2 sm:block hover:text-inherit">
              go back
            </span>
          </div>
        </button>
      </a>
    </Link>
  )
}
