import { ContinueButton } from './ContinueButton'

type InputProps = {
  placeholder?: string
  value?: string
  onChange?: any /* Specify Typings */
  onKeyPress?: any /* Specify Typings */
  route: string /* How would you specify this is a prop from ContinueButton? */
}

export const Input = ({
  placeholder,
  value,
  onChange,
  onKeyPress,
  route,
}: InputProps) => {
  return (
    <div className="flex items-center justify-between pa-input pa-paragraph w-full sm:w-3/5 h-14 sm:h-20">
      <input
        className="pa-paragraph pl-6 w-full sm:w-3/5 "
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <ContinueButton route={route} />
    </div>
  )
}
