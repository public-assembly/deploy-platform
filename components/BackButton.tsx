import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'

type BackButtonProps = {
  route: string
}

export const BackButton = ({ route }: BackButtonProps) => {
  return (
    <Link href={route}>
      <a>
        <button>
          <div className="flex items-center hover:text-white">
            <IoIosArrowBack size={32} />
            <span className="hidden pa-paragraph mx-2 text-xl sm:text-2xl sm:inline sm:mb-0">
              Go Back
            </span>
          </div>
        </button>
      </a>
    </Link>
  )
}
