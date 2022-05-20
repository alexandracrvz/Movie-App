import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import Addtolist from "./components/Addtolist/Addtolist";
import "./App.css";

const apiKey = "d348ab02";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchTerm("");
        if (data.Error) {
          setMessage(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
          setMessage("");
        }
      })

      .catch(() => setMessage("Not found."));
  };

  let movieDisplay = "";
  if (movie !== null) {
    movieDisplay = (
      <div>
        <h2>Title: {movie.Title}</h2>
        <h3>Year: {movie.Year}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        <h4>Genre: {movie.Genre}</h4>
        <h5>Plot: {movie.Plot}</h5>
      </div>
    );
  }

  return (
    <div>
      <div className="App">
        <h1 className="logo">ATHENAEUM</h1>
      </div>

      <nav>
        <Link to="/" className="homenav">
          Home
        </Link>
        <Link to="/favorites" className="favoritesnav">
          Favorites
        </Link>
        <Link to="/about" className="aboutnav">
          About
        </Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <center>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            onChange={updateSearchTerm}
            value={searchTerm}
            type="text"
            placeholder="Film Title"
          />
          <input type="submit" value="Search" />
        </form>
      </center>

      <p>{message}</p>
      {movieDisplay}

      <Addtolist />
    </div>
  );
}

export default App;
