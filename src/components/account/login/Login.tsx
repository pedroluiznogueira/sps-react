import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";

class LoginComponent extends React.Component {

    public handleSubmit(): void {
        window.sessionStorage.setItem('mockedToken', 'mockedToken');
    }

    render() {
        return(
            <>
                {/* <button onClick={this.handleSubmit}>Enter application</button> */}
                <NavLink to='/app' onClick={this.handleSubmit}>
                    Enter Platform
                </NavLink>
            </>
        );
    }
}

export default LoginComponent;