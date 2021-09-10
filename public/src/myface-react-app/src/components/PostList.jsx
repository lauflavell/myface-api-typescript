import React, { useEffect, useState, useRef } from "react";
import { Posts } from "./Posts";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";


export function PostList() {

    const [posts, setPosts] = useState([])

    const [page, setPage] = useState("/posts/?page=1&pageSize=10");

    let nextPage = useRef(0);
    let prevPage = useRef(0);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:3001" + page)
            const json = await response.json()
            setPosts(json.results)
            nextPage.current = json.next
            prevPage.current = json.previous
        }

        fetchPosts()

    },[posts, page])

    if (posts.length === 0) {
        return <p>There are currently no posts.</p>
    } else {
        return (
            <section>
                <Navbar />
                <p>
          <Link to={prevPage.current} onClick={() => setPage(prevPage.current)}>
            Previous
          </Link>
        </p>
        <p>
          <Link to={nextPage.current} onClick={() => setPage(nextPage.current)}>
            Next
          </Link>
        </p>
                <h2>Posts</h2>
                <ol>
                    {posts.map((post) => {
                        return (
                            <Posts post={post} postedBy={post.postedBy} />)
                    })}
                </ol>
                <p>
          <Link to={prevPage.current} onClick={() => setPage(prevPage.current)}>
            Previous
          </Link>
        </p>
        <p>
          <Link to={nextPage.current} onClick={() => setPage(nextPage.current)}>
            Next
          </Link>
        </p>
            </section>
        );
    }

}




