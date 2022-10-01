type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: any /* Specify Typings */
  onKeyPress?: any /* Specify Typings */
}

export const Input = ({ label, placeholder, value, onChange, onKeyPress }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <br></br>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress} />
      </label>
    </div>
  )
}
