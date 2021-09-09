import React from 'react';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div class="nav-bar">
            <Link to="/" >Home</Link>
            <Link to="/posts" >Posts</Link>
            <Link to="/users" >Users</Link>
        </div>
    )
}
