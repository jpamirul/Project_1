import React from "react";

const HomePage = () => {
  return (
    <>
      <form classname="form">
        <label>
          UserName:
          <input type="text" className="username" name="username" width={10} />
        </label>
        <label>
          Password:
          <input type="text" className="password" name="password" />
        </label>
        <button className="loginBtn">Log In</button>
      </form>
    </>
  );
};

export default HomePage;
