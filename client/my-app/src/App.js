import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Games from './pages/Games';
import Reviews from './pages/Reviews';
import Account from './pages/Account';
import AddGame from './pages/AddGame';
import UpdateGame from './pages/UpdateGame';

const API = 'http.//localhost:3001'

function App() {
  return (
    <div>
      <div className="Nav">
        <h1>GameBook</h1>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home API={API} />} />
          <Route path="/games" element={<Games API={API} />} />
          <Route path="/reviews" element={<Reviews API={API} />} />
          <Route path="/account" element={<Account API={API} />} />
          <Route path="/addGame" element={<AddGame API={API} />} />
          <Route path="/updateGame" element={<UpdateGame API={API}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
