import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData();

    const { id, userId, title, body } = post;
    return (
        <div>
            <h1>Every single post is here......</h1>
            <br />
            <hr />
            <h1>ID: {id}</h1>
            <p>UserId: {userId}</p>
            <h2>Title: {title}</h2>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostDetails;