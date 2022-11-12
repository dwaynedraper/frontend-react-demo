import React from 'react'
import "../login.css"

type TextInputProps = {
  name: string,
  label: string,
  value: any,
  placeholder?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextInput({ name, label, value, placeholder, handleChange }: TextInputProps) {
  return (
    <>
      <div className='form-floating mb-1'>
        <input
          type={name}
          className='form-control'
          id={name}
          placeholder={placeholder}
          style={{ width: "330px" }}
          value={value}
          name={name}
          onChange={handleChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  )
}
