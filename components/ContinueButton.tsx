import { IoIosArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'

export type ContinueButtonProps = {
  route: string
  validInput?: boolean
}

export const ContinueButton = ({ route, validInput }: ContinueButtonProps) => {
  if (!validInput) {
    return (
      <a>
        <button className="flex items-center justify-center bg-[#0c1413] w-14 h-14 sm:w-20 sm:h-20 text-[#ecf1f0]">
          <span className="text-[#363636]">
            <IoIosArrowRoundForward className="text-3xl sm:text-4.5" />
          </span>
        </button>
      </a>
    )
  }
  return (
    <Link href={route}>
      <a>
        <button className="flex items-center justify-center bg-[#0c1413] w-14 h-14 sm:w-20 sm:h-20 text-[#ecf1f0]">
          <span className="transition ease-in-out hover:translate-x-1">
            <IoIosArrowRoundForward className="text-3xl sm:text-4.5" />
          </span>
        </button>
      </a>
    </Link>
  )
}
