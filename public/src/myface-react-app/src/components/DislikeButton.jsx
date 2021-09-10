import React, { useState } from 'react';

export function DislikeButton({ post }) {

    const [postId, setPostId] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        return fetch(`http://localhost:3001/posts/${postId}/dislike`, {
            method: 'POST',
        });

    }
    return (
        <form onSubmit={e => { handleSubmit(e) }}>
            <button type="submit" onClick={() => setPostId(post.id)}> 👎 </button> {post.dislikedBy.length}
        </form>
    )
}


