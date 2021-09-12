import React from "react";
import { CreateUserForm } from "./CreateUserForm";
import { Navbar } from './Navbar';

export const CreateUserPage = () => {
    return (
        <section>
            <Navbar />
            <h1>Create User</h1>
            <p><CreateUserForm /></p>
        </section>
    )
}