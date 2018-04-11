import React from 'react';

class UsersList extends React.Component {
    render() {
        return (
            <ul className="users-list">
                <User />
                <User />
                <User />
                <User />
            </ul>
        );
    }
}

const User = props => (
    <li className="user">
        <div className="user-container">
            <div className="image-holder">
            </div>
            <div className="data=holder">
                <h3 className="user-name">User Name</h3>
                <h4 className="char-name">User Character Name</h4>
            </div>
        </div>
    </li>
);

export default UsersList;
