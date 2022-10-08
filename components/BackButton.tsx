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
            <span className="hidden pa-paragraph mb-0.5 mx-0 text-xl sm:text-2xl sm:inline sm:mb-0 sm:mx-2">
              Go Back
            </span>
          </div>
        </button>
      </a>
    </Link>
  )
}
