import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Seferler from './components/Seferler';
import Biletlerim from './components/Biletlerim';
import BiletAl from './components/BiletAl';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="seferler" exact  element={<Seferler/>} />
      <Route path="biletlerim" exact  element={<Biletlerim/>} />
      <Route path="biletal/:seferid" exact  element={<BiletAl/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
