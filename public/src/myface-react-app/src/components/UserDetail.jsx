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
                <section>
                    <User user={user} />
                    <div>
                        <h3>{`${firstName}'s`} Posts</h3>
                        {user.posts.map((post) => {
                            return <Posts post={post} postedBy={user} />
                        })}
                    </div>
                    <div>
                        <h3>Posts {firstName} Liked</h3>
                        {user.likes.map((post) => {
                            return (
                                <div>
                                    <p>{post.userId}</p>
                                    <Posts post={post} postedBy={post}/>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h3>Posts {firstName} Disliked</h3>
                        {user.likes.map((post) => {
                            return (
                                <div>
                                    <Posts post={post} postedBy={post}/>
                                </div>
                            )
                        })}
                    </div>
                </section>

            )
        })


    )
}