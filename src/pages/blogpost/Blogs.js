import React from 'react'
import posts from '../../data/posts.json';
import { useParams, Link } from 'react-router-dom';
import './Blogs.css';


function Blogs() {
    const { blogId } = useParams();

    const currentPost = posts.find((post) => {
        return post.id === blogId;
    });
    return (
        <>
            <article className="blog-singel">
                <h1>{currentPost.title}</h1>
                <h3>{currentPost.date}</h3>
                <p>{currentPost.content}</p>
            </article>
            <article className="blog-singel">
                <Link to="/">Terug naar Home</Link>
            </article>
        </>

    )
}

export default Blogs;