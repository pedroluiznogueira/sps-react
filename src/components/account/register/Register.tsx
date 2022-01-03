import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";
import './register.css';

class RegisterComponent extends React.Component {

    render() {
        return(
            <div className="container">
                <form className="register-form">
                    <h3>Cadastro</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputNome">Nome</label>
                        <input type="text" className="form-control" id="exampleInputNome" aria-describedby="emailHelp" placeholder="Name" name="name"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"></input>
                    </div>
                    <div className="form-group-question">
                        <small>
                            <NavLink className="question-text" to='/login' style={{ textDecoration: 'none' }}>
                                Já tem uma conta ?
                            </NavLink>
                        </small>
                    </div>
                    <NavLink className="btn" to='/login'>
                        Criar Conta
                    </NavLink>
                    <div id="loader"></div>
                    <div id="feedback"></div>
                </form>
            </div>
        );
    }
}

export default RegisterComponent;
