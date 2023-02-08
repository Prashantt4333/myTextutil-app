import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React,{useState} from 'react';

function App() {
  const [ mode , setMode] = useState('dark'); // Dark mode is enable or note 
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      
    }else{
      setMode("light")
    }
  }
  return (
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container">
          <TextForm heading="Enter the text to Analyze"/> 
          {/* <About />  */}
        </div>
      </>
    );
}

export default App;
