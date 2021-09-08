import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export function UsersPage() {

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
            return <p><Link to={`/users/${user.id}`} >{user.username}</Link></p>
        })
    )
}
