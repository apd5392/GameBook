import "../addHero.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddHero() {
  let [image, setimage] = useState("");
  let [name, setName] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [genre, setGenre] = useState("");
  let [consoleName, setConsole] = useState("");

  const imageChange = (e) => {
    console.log(e.target.value);
    setimage(e.target.value);
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value); //allows for imput in text box
  };
  const handleGenreChange = (e) => {
    console.log(e.target.value);
    setGenre(e.target.value);
  };
  const handleConsoleChange = (e) => {
    console.log(e.target.value);
    setConsole(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the refresh (form behavior)
    console.log(name);
    setSubmitted(true);
  };
  const addheroDB = async () => {
    let hero = {
      name: name,
      genre: genre,
      console: consoleName,
      image: image,
    };
    await axios.post("http://localhost:3001/heroes", hero);
  };
  useEffect(() => {
    if (submitted) {
      addheroDB();
      console.log("submit");
      setSubmitted(false);
      setName("");
      setGenre("");
      setConsole("");
      setimage("");
    } else {
      console.log("Nothing");
    }
  }, [submitted]);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h2>Game Information:</h2>
        <div className="userInputs">
          <input
            type="text"
            placeholder="Imgur Link"
            value={image}
            onChange={imageChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Game Name*"
            value={name}
            required={true}
            onChange={handleNameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Console"
            value={consoleName}
            onChange={handleConsoleChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Genres"
            value={genre}
            onChange={handleGenreChange}
          ></input>
          <br></br>
        </div>
        <p>* = required for submission</p>
        <br></br>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}
