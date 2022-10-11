import { ContinueButton } from './ContinueButton'

type InputProps = {
  placeholder?: string
  value?: string
  onChange?: any /* Specify Typings */
  onKeyPress?: any /* Specify Typings */
  route: string /* How would you specify this is a prop from ContinueButton? */
  disabled?: boolean /* How would you specify this is a prop from ContinueButton? */
}

export const Input = ({
  placeholder,
  value,
  onChange,
  onKeyPress,
  route,
  disabled
}: InputProps) => {
  return (
    <div className="flex items-center justify-between pa-input pa-paragraph w-full sm:w-3/5 h-14 sm:h-20 border-3 border-[#0c1413] sm:border-4 ;">
      <input
        className="pa-paragraph pl-3 sm:pl-6 w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
      />
      <ContinueButton route={route} />
    </div>
  )
}
