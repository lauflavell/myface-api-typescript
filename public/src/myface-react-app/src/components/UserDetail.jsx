import React, { useEffect, useState } from "react";
import { Posts } from "./Posts";
import { User } from "./User";


export function UserDetail() {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        async function fetchUsers(){
            const response = await fetch("http://localhost:3001/users");
            const json = await response.json();
            setUsers(json.results);
        }
        fetchUsers();
    },[])

    return(
        users.map((user) => {
            return (
                <section>
                    <User user={user}/>
                    <div>
                        <h3>Posts</h3>
                           {user.posts.map((post)=> {
                               return <Posts post={post} postedBy={user}/>
                           })}
                           
                    </div>
                </section>
                
            )
        })
            
        
    )
}