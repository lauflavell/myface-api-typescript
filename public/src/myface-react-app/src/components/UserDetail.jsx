import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Posts } from "./Posts";
import { User } from "./User";


export function UserDetail() {
    const { userId } = useParams();
    const [user, setUsers] = useState();


    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(`http://localhost:3001/users/${userId}`);
            const json = await response.json();
            setUsers(json);
        }
        fetchUsers();
    }, [userId])


    if (!user) {
        return <p>There are currently no users.</p>
    } else {

        return (

            <section className="user-details">
                 
                 <User user={user} />
                 <h3>{`${user.name}'s`} Posts</h3>
                 <div className="posts-container">
                     {user.posts.map((post) => {
                         return <Posts post={post} postedBy={user} />
                     })}
                 </div>
                 <h3>Posts {user.name} Liked</h3>
                 <div className="likes-posts-container">
                     {user.likes.map(post => {
                         return <Posts post={post} postedBy={user} />
                     })}
                 </div>
                 <h3>Posts {user.name} Disliked</h3>
                 <div className="dislikes-posts-container">
                     {user.dislikes.map(post => {
                         return <Posts post={post} postedBy={user} />
                     })}
                 </div>
             </section> 
        )
    }

}