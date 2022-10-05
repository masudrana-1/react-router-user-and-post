import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className='post'>
            <h1>Every single post is here</h1>
            <p>ID: <Link to={`/post/${id}`}>{id}</Link></p>
            <h3>Title: {title}</h3>
        </div>
    );
};

export default Post;