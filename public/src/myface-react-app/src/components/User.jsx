import React from 'react';

export function User({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <img src={user.coverImageUrl} alt="cover" />
            <img src={user.profileImageUrl} alt="profile" />
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}