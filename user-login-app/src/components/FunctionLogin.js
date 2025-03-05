import React, { useState } from "react";

const FunctionLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="container mt-4">
      <h2>Function Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
      />
      <button onClick={() => onLogin(username)} className="btn btn-success mt-2">
        Submit
      </button>
    </div>
  );
};

export default FunctionLogin;
