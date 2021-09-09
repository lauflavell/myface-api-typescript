import React from "react";
import moment from "moment";

export function Posts({ post, postedBy }) {

    return (
        <li className="post-item">
            <img src={post.imageUrl} alt={post.message} width="300px" />
            <p>{postedBy.username}</p>
            <p>{post.message}</p>
            <p>{moment(post.createdAt).format('DD/MM/YYYY')}</p>
            {post.likedBy !== undefined ? 
            <p><button> 👍 </button>  {post.likedBy.length} <button> 👎 </button> {post.dislikedBy.length}</p> : <></> }
        </li>
    )


}