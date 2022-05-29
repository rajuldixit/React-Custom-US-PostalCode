import React, { useEffect } from 'react'


export interface InfoWidgetProps {
    data: string,
    isLoaded: boolean
}
function Infowidget(props: InfoWidgetProps) {
  
  return (
    <div>{props.data}</div>
  )
}

export default Infowidget