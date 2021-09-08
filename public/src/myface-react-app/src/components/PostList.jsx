import React, { useEffect, useState } from "react";
import { Posts } from "./Posts";
import { Navbar } from "./Navbar";


export function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:3001/posts')
            const json = await response.json()
            setPosts(json.results)
        }

        fetchPosts()

    }, [])

    if (posts.length === 0) {
        return <p>There are currently no posts.</p>
    } else {
        return (
            <section>
                <Navbar />
                <h2>Posts</h2>
                <ol>
                    {posts.map((post) => {
                        return (
                            <Posts post={post} postedBy={post.postedBy} />)
                    })}
                </ol>
            </section>
        );
    }

}


