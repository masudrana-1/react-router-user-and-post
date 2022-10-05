import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    const { name, id, email, username, phone, website } = friend;
    return (
        <div>
            <h1>Friend details page.</h1>
            <h2>Everything you need to know about this person.</h2>
            <br />
            <hr />
            <p>ID: {id}</p>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>UserName: {username}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;