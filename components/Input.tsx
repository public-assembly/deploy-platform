type InputProps = {
  label?: string
  placeholder?: string
  value?: string
}

export const Input = ({ label, placeholder, value }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <br></br>
        <input type="text" placeholder={placeholder} value={value} />
      </label>
    </div>
  )
}
