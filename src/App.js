//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);



  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#09121e";
      showAlert("Dark Mode is Enabled", "success");
      document.title = 'Textutils - Dark Mode';       //it is used to change the title of the page 
      // setInterval(() => {
        // document.title = 'Textutils is best'; 
      // },2000);  just to set the interval values like here i change the title
     }
      
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = 'Textutils - light Mode'; 
     }
}
  return (
      <>
       {/* <Router> */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert = {alert} />
      <div className="container my-3">
     {/* switch can make the user to be on another option without loading the page and it should be rapup into the router tag */}
      {/* <Routes>   */}
          {/* <Route exact path="/about" Component={About}> */}
{/*              */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode = {mode} showAlert= {showAlert}/>}> */}
          
          {/* </Route> */}
          <TextForm heading="Enter text to analyze" mode = {mode} showAlert= {showAlert}/>
     
     
        {/* </Routes> */}
      </div>
      {/* </Router> */}
      </>
  
  );
}

export default App;
