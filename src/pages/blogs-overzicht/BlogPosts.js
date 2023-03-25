import React from 'react';
import posts from '../../data/posts.json';
import { Link } from 'react-router-dom';

function BlogPosts() {
    return (
        <section>
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
        </section >

    )
}

export default BlogPosts;