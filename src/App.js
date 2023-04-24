import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
   <Navbar title="REACT.JS"/>
   
   <div className="container my-4">
   <TextForm heading="Enter your text here"/>
   </div>
    </>
  );
}

export default App;
