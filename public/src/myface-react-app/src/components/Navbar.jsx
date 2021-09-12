import React from 'react';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <Link className="nav-bar-link" to="/" >Home</Link>
            <Link className="nav-bar-link" to="/posts" >Posts</Link>
            <Link className="nav-bar-link" to="/users" >Users</Link>
            <Link className="nav-bar-link" to="/posts/create">+ New Post</Link>
            <Link className="nav-bar-link" to="/users/create">+ New User</Link>
        </nav>
    )
}
