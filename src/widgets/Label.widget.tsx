import React from 'react'
export interface LabelProps {
    title: string
}

function LabelWidget(props: LabelProps) {
  return (
    <div className='label-widget'>{props.title}</div>
  )
}

export default LabelWidget