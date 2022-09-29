type InputProps = {
  label?: string
  placeholder?: string
  value?: string
}

export const Input = ({ label, placeholder, value }: InputProps) => {
  return (
    <label>
      {label}
      <input type="text" placeholder={placeholder} value={value} />
    </label>
  )
}
