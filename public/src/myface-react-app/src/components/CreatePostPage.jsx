import React from 'react';
import { CreatePostForm } from './CreatePostForm';
import { Navbar } from './Navbar';

export function CreatePostPage() {
    return (
        <section>
            <Navbar />
            <h1>Create Post</h1>
            <p><CreatePostForm /></p>
        </section>
    )
}