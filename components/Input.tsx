type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: any
}

export const Input = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <div className="px-8">
      <label>
        {label}
        <br></br>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      </label>
    </div>
  )
}
