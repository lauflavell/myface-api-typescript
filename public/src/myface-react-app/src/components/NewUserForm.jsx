import React, {useState} from "react";

const NewUserForm = () => {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [profileImageUrl, setProfileImageUrl] = useState();
    const [coverImageUrl, setCoverImageUrl] = useState();

    const submit = e => {
        e.preventDefault()
        fetch('/create', {
          method: 'POST',
          body: JSON.stringify({ user }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(json => {setUser(json.user)})
      }

    <form onSubmit={submit}>
    <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
         <input
        type="text"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
         <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
         <input
        type="text"
        name="profileImageUrl"
        value={profileImageUrl}
        onChange={e => setProfileImageUrl(e.target.value)}
      />
         <input
        type="text"
        name="coverImageUrl"
        value={coverImageUrl}
        onChange={e => setCoverImageUrl(e.target.value)}
      />
      <input type="submit" name="Sign Up" />

    </form>
}

export default NewUserForm;