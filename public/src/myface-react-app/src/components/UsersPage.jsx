import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UsersPage() {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("http://localhost:3001/users");
            const json = await response.json();
            setUsers(json.results);
        }
        fetchUsers();
    }, [userId])

    if (users.length === 0) {

        return <p>There are currently no users.</p>

    } else {

        return (
            users.map((user, index) => {
                return <p><Link key={index} to={`/users/${user.id}`} onClick={() => setUserId(user.id)} value={userId}>{user.username}  </Link></p>
            })
        )
    }
}
