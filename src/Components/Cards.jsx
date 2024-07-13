import React, { useState, useEffect } from 'react'
import Card from './Card'
// import { useLoaderData } from "react-router-dom";
import CreatePost from './CreatePost'

const Cards = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7071/posts')
        .then((response) => response.json())
        .then((posts) => setPosts(posts));
    }, []);
    // const { posts } = useLoaderData();
  return (
    <>
    {<CreatePost/>}
    {posts.map(post => (
        <div key={post.id}>
            <Card item={post}/>
        </div>
        ))}
    </>
  )
}

export default Cards
