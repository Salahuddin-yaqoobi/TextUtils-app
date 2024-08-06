import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText);   //right way to change the state
    }
    const handleOnChange = (event)=>{
        console.log("clicked onchange");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
   
  return (
    <div>    

<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
</div>

  )
}
