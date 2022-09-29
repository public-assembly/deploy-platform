type InputProps = {
  placeholder?: string
  value?: string
}

export const Input = ({ placeholder, value }: InputProps) => {
  return (
    <label>
      <input type="text" placeholder={placeholder} value={value} />
    </label>
  )
}
