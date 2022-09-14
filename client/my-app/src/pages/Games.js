import "../Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const [games, setHero] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/heroes`);
        setHero(res.data.games);
        console.log(res.data.games);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHero();
  }, []);

  const handleDelete = async (_id) => {
    let res = await axios
      .delete(`http://localhost:3001/heroes/${_id}`)
      .catch((error) => console.log(error));
    console.log(res.data.game);
  };
  const realTimeDelete = async (game) => {
    let index = games.indexOf(game);
    let game2 = [...games];
    game2.splice(index, 1);
    setHero(game2);
  };
  const handleUpdate = async (_id) => {
    let res = await axios
      .put(`http://localhost:3001/heroes/${_id}`)
      .catch((error) => console.log(error));
    console.log(res.data.game);
  };

  if (!games) {
    return <h1>Loading Please Wait!</h1>;
  } else {
    return (
      <div>
        <div className="addGameButton">
          <button onClick={() => navigate("/addGame")}>Add Game</button>
        </div>
        {games.map((game) => (
          <div className="gameCard">
            {/* <p>{</p> */}
            <img src={game.image} />
            <h3 className="gameTitle">{game.name}</h3>
            <h3 className="gameConsole">{game.console}</h3>
            <h3 className="gameGenre">{game.genre}</h3>
            <button
              className="updateBtn"
              onClick={() => {
                handleUpdate(game._id);
              }}
            >
              Edit
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                handleDelete(game._id);
                realTimeDelete(game);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <br></br>
        <div className="addGameButton">
          <button onClick={() => navigate("/addGame")}>Add Game</button>
        </div>
      </div>
    );
  }
};
export default Games;
