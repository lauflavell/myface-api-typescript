import React, { useEffect, useState } from "react";
import { Posts } from "./Posts";
import { User } from "./User";



export function UserDetail() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("http://localhost:3001/users");
            const json = await response.json();
            setUsers(json.results);
        }
        fetchUsers();
    }, [])

    return (
        users.map((user) => {
            const firstName = user.name.split(" ")[0];
            return (
                <section className="user-details">
                    <User user={user} />
                    <h3>{`${firstName}'s`} Posts</h3>
                    <div className="posts-container">
                        {user.posts.map((post) => {
                            return <Posts post={post} postedBy={user} />
                        })}
                    </div>
                    <h3>Posts {firstName} Liked</h3>
                    <div className="likes-posts-container">
                        {user.likes.map(post => {
                            return <Posts post={post} postedBy={user} />
                        })}
                    </div>
                    <h3>Posts {firstName} Disliked</h3>
                    <div className="dislikes-posts-container">
                        {user.dislikes.map(post => {
                            return <Posts post={post} postedBy={user} />
                        })}
                    </div>
                </section>
            )
        })


    )
}