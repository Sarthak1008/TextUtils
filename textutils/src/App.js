import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, Routes, Router, Switch, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is a Amazing Mode";
      }, 1500);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 2000)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    };
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-5'>
          <Routes>
            <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
            <Route path='about' element={<About mode={mode} toggleMode={toggleMode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
