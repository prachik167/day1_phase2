import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ClassLogin from "./components/classLogin";
import FunctionLogin from "./components/FunctionLogin";
import Welcome from "./components/Welcome";

const App = () => {
  const [username, setUsername] = useState("");
  const [useFunctionComponent, setUseFunctionComponent] = useState(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center">React Login Example</h1>

      <div className="text-center">
        <button
          className="btn btn-info mb-3"
          onClick={() => setUseFunctionComponent(!useFunctionComponent)}
        >
          Switch to {useFunctionComponent ? "Class Component" : "Function Component"}
        </button>
      </div>

      {useFunctionComponent ? (
        <FunctionLogin onLogin={setUsername} />
      ) : (
        <ClassLogin onLogin={setUsername} />
      )}

      {username && <Welcome username={username} />}
    </div>
  );
};

export default App;

