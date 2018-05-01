import React from 'react';
import '../style/LoginApp.css';
import { Link } from 'react-router-dom';

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
                    <form>
                        <label htmlFor="userName">User Name</label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={this.props.userName} 
                            onChange={this.props.handleInputs} />
                        <label htmlFor="charName">Character Name</label>                        
                        <input 
                            id="charName"
                            name="charName"
                            type="text"
                            value={this.props.charName} 
                            onChange={this.props.handleInputs} />
                        <label htmlFor="Password">Password</label>                        
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={this.props.password} 
                            onChange={this.props.handleInputs} />
                    </form>
                    <Link to="/chat">
                        <button className="login-button">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LoginApp;
