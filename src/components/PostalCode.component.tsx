import { useState } from 'react'
import ButtonField from '../widgets/ButtonField.widget';
import Infowidget from '../widgets/Info.widget';
import InputField from '../widgets/InputField.widget';
import LabelWidget from '../widgets/Label.widget';

const PostalCode = () => {
  const key = '3cf67ab0-df43-11ec-9bf8-69a94d494d6b'  
  const apiURL = `https://app.zipcodebase.com/api/v1/radius?apikey=${key}&radius=0.1&country=us&code=`;  
  const [postalCode, setPostalCode] = useState('') 
  const [city, setCity] = useState('')
  const handleKeyUp = (e: any) => {
    setPostalCode(e.target.value)
  }  
  const handleKeyDown = (e: any) => {
    var key = e.which ? e.which : e.keyCode;
    if (
      (e && e.target.value.length >= 5 &&
        key !== 8 &&
        key !== 37 &&
        key !== 38 &&
        key !== 39 &&
        key !== 40) ||
      (key === 18 || key === 189 || key === 229)
    ) {
      e.preventDefault();
    }
  }

  const handleCopyPaste = (e: any) => {
    e.preventDefault();
    let pasteText = e.clipboardData.getData("text/plain");
    pasteText = pasteText.replace(/[^0-9]/g, "");
    let newContent = e.target.value + pasteText;
    newContent = newContent.substring(0, 5);
    e.target.value = newContent;
    setPostalCode(e.target.value)
  }

  let buttonProps = {
    label: 'Submit',
    submit: () => {
        let url = apiURL+postalCode
        fetch(url).then(res => res.json())
        .then(
          (res) => {
            let result = res.results[0]
            if(result && result.city) {
                setCity(result.city)
                infoWidgetProps.isLoaded = true
            }
          },
          (error) => {
            infoWidgetProps.data = error
            infoWidgetProps.isLoaded = false
          }
        )
    },
  }

  let labelProps = {
    title: 'Enter US Postal code to find out the city'
  }

  let infoWidgetProps = {
    data: city,
    isLoaded: false
  }

  return (
    <div className='postal-code-widget-style'>
        <LabelWidget {...labelProps}/>
        <InputField 
        onKeyDown={(e: any) => handleKeyDown(e)}
        onKeyUp={(e: any) => handleKeyUp(e)}
        onPaste={(e: any) => handleCopyPaste(e)}
        pattern="\d*"
        placeholder="Enter zipcode"
        type="number"
        value={postalCode} 
        />
        <ButtonField {...buttonProps}/>

        <Infowidget {...infoWidgetProps} />
    </div>  
  )
}

export default PostalCode