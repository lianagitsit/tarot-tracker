import React, { useState } from "react";

export default function SignUpForm() {
    const [nameValue, setNameValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwValue(e.target.value);
    }

    return (
        <form>
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