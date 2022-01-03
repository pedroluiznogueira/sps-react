import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './components/account/login/Login';
import RepoComponent from './components/entity/RepoComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

