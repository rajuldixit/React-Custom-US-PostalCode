import React from 'react'
export interface InputFieldProps {
  onKeyDown(e: any): any,
  onKeyUp(e: any): any,
  onPaste(e: any): any,
  pattern: string,
  placeholder: string,
  type: string,
  value: string
}

function InputField(props: InputFieldProps) {
  return (
    <input className='input-field-widget'
        onKeyDown={e => props.onKeyDown(e)}
        onKeyUp={e => props.onKeyUp(e)}
        onPaste={e => props.onPaste(e)}
        pattern={props.pattern}
        placeholder={props.placeholder}
        type={props.type}
        defaultValue={props.value}
      />
  )
}

export default InputField