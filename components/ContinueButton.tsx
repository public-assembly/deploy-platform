import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

type ContinueButtonProps = {
  route: string
}

export const ContinueButton = ({ route }: ContinueButtonProps) => {
  return (
    <Link href={route}>
      <a>
        <button className="pa-input h-20 px-6 hover:bg-slate-50">
          <IoIosArrowForward size={24} />
        </button>
      </a>
    </Link>
  )
}
