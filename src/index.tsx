import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './components/account/login/Login';
import RepoComponent from './components/entity/RepoComponent';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { isAuth } from './components/account/auth/AuthComponent';
import RegisterComponent from './components/account/register/Register';


ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/app" element={<App />} />
        </Route>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

export function PrivateOutlet() {
  const auth = isAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}