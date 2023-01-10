import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDitels = () => {
    const infomeson = useLoaderData();
    console.log(infomeson)
    return (
        <div>
            <h3>This Is user inform </h3>
            <p>{infomeson.id}</p>
        </div>
    );
};

export default UserDitels;