import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const url = `http://127.0.0.1:8000/user/register-user/`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleSubmitRegisterUser = (e) => {
    e.preventDefault();
    registerUser();
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmitRegisterUser}>
        <label>
          UserName:
          <input
            value={username}
            type="text"
            className="username"
            onChange={handleUserName}
          />
        </label>
        <label>
          email:
          <input
            value={email}
            type="email"
            className="email"
            name="email"
            onChange={handleEmail}
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            type="password"
            className="password"
            name="password"
            onChange={handlePassword}
          />
        </label>
        <button className="registerBtn" type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
