import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChatApp from '../componentsChat/ChatApp';
import LoginApp from '../componentsLogin/LoginApp';

class RoutingApp extends React.Component {
    state = {
        userName: '',
        charName: '',
        password: ''
    };

    handleInputs = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    };
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            render={props => (<LoginApp 
                                userName = {this.state.userName}
                                charName = {this.state.charName}
                                password = {this.state.password} 
                                handleInputs={this.handleInputs} />
                            )}
                        />
                        <Route 
                            exact 
                            path="/chat" 
                            render={props =>(<ChatApp
                                userName = {this.state.userName}
                                charName = {this.state.charName}
                                password = {this.state.password} />
                            )} 
                        />
                        <Route 
                            component={LoginApp} />
                    </Switch>
                </div>
        </BrowserRouter>
        )
    }
}

export default RoutingApp;