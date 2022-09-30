import { FormEventHandler } from 'react'

type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (text: string) => void
}

export const Input = ({ label, placeholder, value, onChange }: InputProps) => {
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
