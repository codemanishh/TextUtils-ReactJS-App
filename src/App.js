import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { Outlet } from "react-router-dom";

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


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
    if(mode==='light'){
    setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled", "success")
      // document.title="dark mode"
    // setInterval(()=>{
    //   document.title="text util is manzing";
    // },2000)
    // setInterval(()=>{
    //   document.title="download now";
    // },1500)
    }
    else{
      setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode is enabled", "success")
      document.title="light mode"     /// this is good concept to learn 

      }
    
  }
  const toggleMode1=()=>{
    if(mode==='light'){
    setMode('danger');
      document.body.style.backgroundColor='red';
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode is enabled", "success")
      }
    
  }
  const toggleMode2=()=>{
    if(mode==='light'){
    setMode('success');
      document.body.style.backgroundColor='green';
      showAlert("green mode is enabled", "success")
    }
    else{
      setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode is enabled", "success")
      }
    
  }
  return (
    <>
   <Navbar title="REACT.JS" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}  toggleMode2={toggleMode2}/>
   <Alert alert={alert}/>
   <div className="container my-4" >
   <Outlet />

   </div>
    </>
  );
}

export default App;
