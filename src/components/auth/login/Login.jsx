import { useContext, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from '../../context/UserContext';
import './Login.css';

const user = {
    email: '',
    password: ''
}

function Login() {
    const navigate = useNavigate();
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const { authenticate } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        user.email = emailText;
        user.password = passwordText;
        const data = await authenticate(user);
        data.map((resp) => {
            if (resp.email === user.email) {
                window.sessionStorage.setItem('mockedToken', 'mockedToken');
                navigate('/app', { replace: true });                
            }
        })
        
        setEmailText('');
        setPasswordText('');
    }

    const handleEmailChange = (e) => {
        setEmailText(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordText(e.target.value)
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input
                        onChange={handleEmailChange}
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        name="email"
                        value={emailText}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input
                        onChange={handlePasswordChange}
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        name="password" 
                        value={passwordText}
                    />
                </div>
                <div className="form-group-question">
                    <small>
                        <NavLink className="question-text" to='/register' style={{ textDecoration: 'none' }}>
                            Ainda não tem uma conta ?
                        </NavLink>
                    </small>
                </div>
                <button className="btn" type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
