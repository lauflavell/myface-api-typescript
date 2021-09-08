import React from 'react';

export function Navbar() {
    return (
        <div class="nav-bar">
            <Link to="/posts" >Posts</Link>
            <Link to="/users" >Users</Link>
        </div>
    )
}
