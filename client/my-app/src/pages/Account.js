import "../Home.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function createAccount() {
  let [firstName, setFirstName] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [lastName, setLastName] = useState("");
  let [userName, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value); //allows for imput in text box
  };
  const handleLastNameChange = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the refresh (form behavior)
    console.log(firstName);
    setSubmitted(true);
  };
  const addUserDB = async () => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    };
    await axios.put("http://localhost:3001/users/6321e21c42fd4a461babca75", user);
  };
  useEffect(() => {
    if (submitted) {
      addUserDB();
      console.log("submit");
      setSubmitted(false);
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      console.log("Nothing");
    }
  }, [submitted]);

  return (
    <div className="signUp-container">
      <form onSubmit={handleSubmit}>
        <h2>Enter Your New Account Information:</h2>
        <div className="userInputs">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="User Name*"
            value={userName}
            required={true}
            onChange={handleUsernameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Email*"
            value={email}
            required={true}
            onChange={handleEmailChange}
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password*"
            value={password}
            required={true}
            onChange={handlePasswordChange}
          ></input>
          <br></br>
        </div>
        <p>* = required for submission</p>
        <br></br>
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
}
