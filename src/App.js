import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
function App() {
  const [alert,setAlert] = useState(null)
  const [mode,setMode]=useState('light')

  const showAlert = (message,type ) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode==='light' || mode==='danger'){
    setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled", "success")
    }
     else if(mode==='light' || mode==='dark'){
      document.body.style.backgroundColor='red';
     }
    else if(mode==='danger' || mode==='dark'){
      document.body.style.backgroundColor='white';
      setMode('light');
           document.body.style.backgroundColor='light';
      showAlert("light mode is enabled", "success")
    }
  }
  return (
    <>
   <Navbar title="REACT.JS" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-4" >
   <TextForm heading="Enter your text here" mode={mode} toggleMode={toggleMode}/>
   <About/>
   </div>
    </>
  );
}

export default App;
