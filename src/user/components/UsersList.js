import React from 'react';


import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card'


const UsersList = props => {
    if (props.items.length === 0)
    {
        return (
        <div className = "center">
            <h2>No users Found!</h2>
        </div>
        );
    }

    return <ul className = "users-list">
        {props.items.map(user => {
            return <UserItem key = {user.id} 
            id = {user.id} 
            image = {user.image}
            name = {user.name}
            plaecCount = {user.places} />
        })}
    </ul>;

};

export default UsersList;