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
            <span className="pa-paragraph mb-0.5 mx-2">Go Back</span>
          </div>
        </button>
      </a>
    </Link>
  )
}
