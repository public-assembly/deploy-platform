import { IoIosArrowRoundForward } from 'react-icons/io'

export type ContinueButtonProps = {
  validInput?: boolean
  onClick?: any
}

export const ContinueButton = ({ validInput, onClick }: ContinueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-[#0c1413] w-14 h-14 sm:w-20 sm:h-20 text-[#ecf1f0]">
      <span className="transition ease-in-out hover:translate-x-1">
        <IoIosArrowRoundForward className="text-3xl sm:text-4.5" />
      </span>
    </button>
  )
}
