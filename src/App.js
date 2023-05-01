import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      document.body.style.backgroundColor='white';
      setMode('light');

    }

  }
  return (
    <>
   <Navbar title="REACT.JS" mode={mode} toggleMode={toggleMode}/>
   
   <div className="container my-4">
   <TextForm heading="Enter your text here"/>
   {/* <About/> */}
   </div>
    </>
  );
}

export default App;
