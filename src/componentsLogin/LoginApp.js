import React from 'react';
import '../style/LoginApp.css';

class LoginApp extends React.Component {
    login = () => {

    };

    render() {
        return (
            <div className="login-app">
                <div className="login-header">
                    <div className="container">
                        Login
                    </div>
                </div>
                <div className="login-body">
                    <input 
                        name="user"
                        type="text"/>
                    <input
                        name="password"
                        type="password"/>
                    <button className="login-button">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginApp;
