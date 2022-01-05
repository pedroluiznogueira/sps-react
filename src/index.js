import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginComponent from './components/auth/login/Login';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { isAuth } from './components/auth/token/Token';
import RegisterComponent from './components/auth/register/Register';


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