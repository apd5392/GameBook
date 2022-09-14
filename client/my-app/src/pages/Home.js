import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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
  return (
    <div className="homepage">
      <div className="intro">
        <h1>Welcome to GameBook!</h1>
        <h2>
          Use this site to save Information on games you play and write reviews!
        </h2>
      </div>
      <div className="heroDiv">
        {games.map((game) => (
          <GameCard
            id={game._id}
            name={game.name}
            image={game.image}
            genre={game.genre}
            console={game.console}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
