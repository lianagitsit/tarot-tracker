import React, { useState } from "react";

interface SignUpFormProps {
    handleSignUp: (arg: boolean) => void
}

export default function SignUpForm({handleSignUp}: SignUpFormProps) {
    const [nameValue, setNameValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwValue(e.target.value);
    }

    const handleSubmit = (event: any) => {
        event?.preventDefault();
        fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: nameValue, password: pwValue}),
            cache: 'default'
          }).then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={nameValue} onChange={handleNameChange} />
            </label>
            <label>
                Password:
                <input type="text" name="password" value={pwValue} onChange={handlePasswordChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}