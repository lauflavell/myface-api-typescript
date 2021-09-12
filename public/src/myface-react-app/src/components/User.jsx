import React from 'react';

export function User({ user }) {
    return (
        <div className="profile-div">
            <img className="user-detail-cover-img" src={user.coverImageUrl} alt="cover" />
            <img className="user-profile-img" src={user.profileImageUrl} alt="profile" />
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}