import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useState } from 'react';
import './App.css';
import About from './components/About';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Body from './Body';

const AppContainer = () => {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "Light mode";
    }
  };

  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('success');
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <TextForm heading="Enter your text here" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} />,
        },
        {
          path: "/about",
          element: <About mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
