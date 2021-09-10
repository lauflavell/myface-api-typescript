import React, { useState } from 'react';
import { useHistory } from 'react-router';

export function CreatePostForm() {

    const history = useHistory()

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
        window.alert("Your post has been created!")
        history.push("/posts/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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