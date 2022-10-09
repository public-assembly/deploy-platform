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
          <div className="flex items-center gap-1 pa-paragraph transition ease-in-out hover:text-[#ecf1f0]">
            <IoIosArrowRoundBack className='text-3xl sm:text-4.5' />
            <span className="hidden mb-2 sm:block">go back</span>
          </div>
        </button>
      </a>
    </Link>
  )
}
