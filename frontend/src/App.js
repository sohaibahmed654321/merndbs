// import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showdata from './Components/Showdata';
import "bootstrap-icons/font/bootstrap-icons.css"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element= {<Register />} />
        <Route path="/get" element= {<Showdata />} />


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
