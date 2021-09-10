import React from "react";
import moment from "moment";
import { DislikeButton } from "./DislikeButton";
import { LikeButton } from "./LikeButton";

export function Posts({ post, postedBy }) {

    return (
        <li className="post-item">
            <img src={post.imageUrl} alt={post.message} width="300px" />
            <p>{postedBy.username}</p>
            <p>{post.message}</p>
            <p>{moment(post.createdAt).format('DD/MM/YYYY')}</p>
            {post.likedBy !== undefined ? 
            <p><LikeButton post={post} postedBy={post.postedBy} /> <DislikeButton post={post} postedBy={post.postedBy}/></p> : <></> }
        </li>
    )


}