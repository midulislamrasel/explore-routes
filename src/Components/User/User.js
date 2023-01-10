import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'
const User = (props) => {
    const {id,name,username,} = props.user;
    return (
        <div className='userInformeson'>
            <h2>Name {name}</h2>
            <h3>User Name <Link to = {`/user/ ${id}`}>{username}</Link> </h3>
        </div>
    );
};

export default User;