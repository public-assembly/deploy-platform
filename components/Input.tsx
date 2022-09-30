import { FormEventHandler } from 'react'

type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: any
  // React.ChangeEvent<HTMLInputElement>
}

export const Input = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <br></br>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      </label>
    </div>
  )
}
