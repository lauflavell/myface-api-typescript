import React from "react";
import moment from "moment";

export function Posts ({ post, postedBy }) {

    const isLikedByDislikedBy = post.likedBy !== undefined;
    let likesDislikes;

    if(isLikedByDislikedBy){
        likesDislikes = <p><button> 👍 </button>  {post.likedBy.length} <button> 👎 </button> {post.dislikedBy.length}</p>;
    }
        return (
            <li>
                <img src={post.imageUrl} alt={post.message} width="300px"/>
                <p>Posted by: {postedBy.name}</p>
                <p>{postedBy.username}</p>
                <p>{post.message}</p>
                <p>{moment(post.createdAt).format('DD/MM/YYYY')}</p>
                {likesDislikes}
            </li>
        )
    
    
}