import React from 'react';
import UsersList from './UsersList';
import RecentMessages from './RecentMessages';
import WriteMessage from './WriteMessage';

class ChatApp extends React.Component {
    state = {
        dicesSelected: [],
        roll: [],
        results: [],
        currentMessage: '',
        users: []
    }

    render() {
        return (
            <div className="chat-app">
                <div className="col-left">
                    <UsersList />
                </div>
                <div className="col-right">
                    <RecentMessages />
                    <WriteMessage />
                </div>                
            </div>
        );
    }
}

export default ChatApp;
