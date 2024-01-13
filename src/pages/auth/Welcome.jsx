import React from "react";

const Welcome = ({ onLoginClick, onSignupClick }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-600">Welcome to new world!!</h1>
      <div className="flex justify-around w-[80%] gap-2">
        <button className="btn" onClick={onLoginClick}>Login</button>
        <button className="btn" onClick={onSignupClick}>SignUp</button>
      </div>
    </>
  );
};

export default Welcome;
