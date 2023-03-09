import { ContinueButton, ContinueButtonProps } from './ContinueButton'

type InputProps = ContinueButtonProps & {
  placeholder?: string
  value?: string
  onChange?: any
  onKeyPress?: any
}

export const Input = ({
  placeholder,
  value,
  onChange,
  validInput,
  onClick,
  onKeyPress,
}: InputProps) => {
  return (
    <div className="flex items-center justify-between pa-input pa-paragraph w-full sm:w-3/5 h-14 sm:h-20 border-3 border-[#0c1413] sm:border-4 ;">
      <input
        className="pa-paragraph pl-3 sm:pl-6 w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
      />
      <ContinueButton validInput={validInput} onClick={onClick} />
    </div>
  )
}
