import React from "react";

export function Posts ({ post, postedBy }) {
    const isLikedByDislikedBy = post.likedBy === !undefined;
    let likesDislikes;  
    if(isLikedByDislikedBy){
        likesDislikes = <p>Likes: {post.likedBy.length} Dislikes: {post.dislikedBy.length}</p>;
    }
        return (
            <li>
                <img src={post.imageUrl} alt={post.message} />
                <p>Posted by: {postedBy.name}</p>
                <p>{post.message}</p>
                <p>{post.createdAt}</p>
                {likesDislikes}
            </li>
        )
    
    
}