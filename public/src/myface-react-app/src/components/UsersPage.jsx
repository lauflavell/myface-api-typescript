import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);
  const [page, setPage] = useState("/users/?page=1&pageSize=10");

  let nextPage = useRef(0);
  let prevPage = useRef(0);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3001" + page);
      const json = await response.json();
      setUsers(json.results);
      nextPage.current = json.next;
      prevPage.current = json.previous;
    }
    fetchUsers();
  }, [userId, page]);

  if (users.length === 0) {
    return <p>There are currently no users.</p>;
  } else {
    return (
      <div>
        {users.map((user, index) => {
          return (
            <p>
              <Link
                key={index}
                to={"/users/" + user.id}
                onClick={() => setUserId(user.id)}
                value={userId}
              >
                {user.username}
              </Link>
            </p>
          );
        })}
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
      </div>
    );
  }
}
