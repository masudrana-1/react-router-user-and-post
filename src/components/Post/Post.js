import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handelNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h1>Every single post is here</h1>
            <h3>Title: {title}</h3>

            {/* 3 ta way te dynamic vabe route declare kora jay */}
            {/* option 1 */}
            <Link to={`/post/${id}`}>Visit ID: {id}</Link>

            {/* option 2 */}
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>

            {/* option 3 */}
            <button onClick={handelNavigate}>Show Details 2</button>
        </div >
    );
};

export default Post;