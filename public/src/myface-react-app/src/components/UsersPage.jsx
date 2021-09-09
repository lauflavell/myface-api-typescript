import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);

  const [page, setPage] = useState("/?page=1&pageSize=10")
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`http://localhost:3001/users/${page}`);
      const json = await response.json();
      setUsers(json.results);
      setPrevious(json.previous)
      setNext(json.next)
    }
    fetchUsers();
  }, [userId, page]);

  if (users.length === 0) {
    return <p>There are currently no users.</p>;
  } else {
    return <div>
    {users.map((user, index) => { return <p><Link key={index} to={`/users/${user.id}`} onClick={() => setUserId(user.id)} value={userId}>{user.username}</Link></p>})} 
    <Link>Next</Link>
    </div>
  } 
}
