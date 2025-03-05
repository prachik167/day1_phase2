import React, { Component } from "react";

class ClassLogin extends Component {
  state = { username: "" };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = () => {
    this.props.onLogin(this.state.username);
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>Class Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleChange}
          className="form-control"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary mt-2">
          Submit
        </button>
      </div>
    );
  }
}

export default ClassLogin;
