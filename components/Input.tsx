type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: any /* Specify Typings */
  onKeyPress?: any /* Specify Typings */
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  onKeyPress,
}: InputProps) => {
  return (
    <div className={'pa-input flex items-center'}>
      <input
        className="pa-paragraph ml-6"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}
