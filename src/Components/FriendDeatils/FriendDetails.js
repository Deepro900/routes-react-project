import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Details About :{friend.name}</h1>
            <p>Call him/his: {friend.phone}</p>
            <h3>Everything you need to know friends detals </h3>
        </div>
    );
};

export default FriendDetails;