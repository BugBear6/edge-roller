import React from 'react';

class RecentMessages extends React.Component {
    render() {
        return (
            <div className="recent-messages">
                <ul className="shouts-list">
                    <Shout />
                    <Shout />
                    <Shout />
                    <Shout />
                </ul>
            </div>
        );
    }
}

const Shout = props => (
    <li className="shout">
        <div className="shout-container">
            <h3 className="user-name">User Name</h3>
            <h4 className="char-name">Character Name</h4>
            <p className="shout-text"></p>
            <div className="shout-roll"></div>
        </div>
    </li>
);

export default RecentMessages;
