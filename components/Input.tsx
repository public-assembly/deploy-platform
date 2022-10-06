
type InputProps = {
  placeholder?: string
  value?: string
  onChange?: any /* Specify Typings */
  onKeyPress?: any /* Specify Typings */
}

export const Input = ({ placeholder, value, onChange, onKeyPress }: InputProps) => {
  return (
    <input
      className="pa-input pa-paragraph pl-6 w-full h-20 text-xl sm:w-3/5 sm:text-2xl"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}
