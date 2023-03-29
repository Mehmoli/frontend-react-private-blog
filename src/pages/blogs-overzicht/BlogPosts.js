import React from 'react';
import posts from '../../data/posts.json';
import { Link } from 'react-router-dom';
import './BlogPosts.css'

function BlogPosts() {
    return (
        <section className='blog-overzicht'>
            <div>
                <h3>Aantal Blogs {posts.length}</h3>
                <ul>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={`/blogs-overzicht/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        </section >

    )
}

export default BlogPosts;