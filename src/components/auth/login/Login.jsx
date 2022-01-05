import { NavLink } from "react-router-dom";
import './Login.css';

function Login() {

    const handleSubmit = () => {
        window.sessionStorage.setItem('mockedToken', 'mockedToken');
    }

    return(
        <div className="container">
            <form className="form">
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                </div>
                <div className="form-group-question">
                    <small>
                        <NavLink className="question-text" to='/register' style={{ textDecoration: 'none' }}>
                            Ainda não tem uma conta ?
                        </NavLink>
                    </small>
                </div>
                <NavLink onClick={handleSubmit} className="btn" to='/app'>
                    Entrar
                </NavLink>
                <div id="loader"></div>
                <div id="feedback"></div>
            </form>
        </div>
    );
}

export default Login;
