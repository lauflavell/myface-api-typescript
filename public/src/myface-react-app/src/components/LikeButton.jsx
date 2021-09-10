import React, { useEffect, useState } from 'react';

export function LikeButton({ post }) {

    const [postId, setPostId] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        return fetch(`http://localhost:3001/posts/${postId}/like`, {
            method: 'POST',
        });

    }
    return (
        <form onSubmit={e => { handleSubmit(e) }}>
            <button type="submit" onClick={() => setPostId(post.id)}> 👍 </button> {post.likedBy.length}
        </form>
    )
}