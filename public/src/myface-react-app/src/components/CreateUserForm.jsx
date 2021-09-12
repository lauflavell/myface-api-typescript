import React, { useState } from "react";
import { useHistory } from "react-router";

export const CreateUserForm = () => {
  const history = useHistory();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [coverImageUrl, setCoverImageUrl] = useState();
  const [profileImageUrl, setProfileImageUrl] = useState();

  const handleSubmitUserForm = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        coverImageUrl: coverImageUrl,
        profileImageUrl: profileImageUrl,
      }),
    });
    window.alert("User created successfully");
    history.push("/users/");
  };

  return (
    <div>
      <form onSubmit={handleSubmitUserForm}>
        <label>
          Name:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            required
          />
        </label>
        <label>
          E-mail:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Cover image:
          <input
            value={coverImageUrl}
            onChange={(event) => setCoverImageUrl(event.target.value)}
            type="text"
            name="coverImageUrl"
            required
          />
        </label>
        <label>
          Profile image:
          <input
            value={profileImageUrl}
            onChange={(event) => setProfileImageUrl(event.target.value)}
            type="text"
            name="profileImageUrl"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
