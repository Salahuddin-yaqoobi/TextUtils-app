import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);   //right way to change the state
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);   //right way to change the state
        props.showAlert("Converted to Lowercase","success");

    }
    function speak (){
        const newText = text.value;
        const speech = window.speechSynthesis;
        const audio = new SpeechSynthesisUtterance(text);
        speech.speak(audio);
        props.showAlert("Speaker is on","success");

    }
   const handleClear = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared","success");

   }
    
    const handleOnChange = (event)=>{
        console.log("clicked onchange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // const countWords = (str) => {
      // let words;
      // if (text == "") {
  
        // words = 0;
      // } else {
        // words = str.trim().split(/\s+/).length;
      // }
      // return words;
    // };
    //  const buttonTheme ={
    //  backgroundColor: 
    //  }

    const success = {
    backgroundColor : ()=>{
    if(props.newCls==='success'){
        return 'red';
    }
    }
    }
  
    
  return (
    <>   

<div className="mb-3" style = {{color : props.mode === 'light'?'black':'white'}}>
    <h1 className='mb-4'>{props.heading}</h1>
  <textarea className="form-control" id="myBox" style = {{color : props.mode === 'light'?'black':'white',
    backgroundColor : props.mode === 'dark'?'#09121e':'white'
  }} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button style={success} disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowers</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}>Listen words</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
<div className="container my-3" style = {{color : props.mode === 'light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element !=0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element!=0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>

</>
  )}
