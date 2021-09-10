import React, { useState } from 'react';

export function CreatePostForm() {

    const [message, SetMessage] = useState();
    const [imageUrl, setImageUrl] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                imageUrl: imageUrl,
            }),

        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit.then()}>
                <label>
                    Message:
                    <input value={message} onChange={e => SetMessage(e.target.value)} type="text" name="message" required />
                </label>
                <label>
                    ImageUrl:
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type="text" name="imageUrl" required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>)
}