import React from 'react';
import './userstyle.css'
import { useLoaderData } from 'react-router-dom';

const UserDitels = () => {
    const infomeson = useLoaderData();
    console.log(infomeson)
    return (
        <div className='userDitels'>
            <h2> ID :{infomeson.id}</h2>
            <h1>Title : {infomeson.title}</h1>
            <p>Body: {infomeson.body}</p>
        </div>
    );
};

export default UserDitels;