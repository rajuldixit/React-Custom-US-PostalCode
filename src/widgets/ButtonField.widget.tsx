import React from 'react'

export interface ButtonProps {
    label: string,
    submit(): void
}


function ButtonField(props: ButtonProps) {
  return (
    <button className='button-field-widget' onClick={props.submit}>{props.label}</button>
  )
}

export default ButtonField