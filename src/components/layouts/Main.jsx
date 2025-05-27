import movies from "../../data/movies";
import genres from "../../data/genres";
import { useState, useEffect } from "react";

export default function Main() {
  const [genreFilter, setGenreFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) =>
      movie.genre.toLocaleLowerCase().includes(genreFilter.toLocaleLowerCase())
    );
    setFilteredMovies(newFilteredMovies);
  }, [genreFilter]);

  return (
    <main>
      <div className="container">
        <h1 className="my-3 text-center">Movie Catalog</h1>

        {/* <select name="genres" className="form-control mb-3">
          {genres.map((genre) => (
            <option
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              {genre}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          className="form-control mb-3"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          placeholder="Enter genre..."
        />

        <hr />

        <div className="row g-3">
          {filteredMovies.map((movie, index) => (
            <div className="col-4">
              <div className="card" key={index}>
                <div className="card-header">Titolo: {movie.title}</div>
                <div className="card-body">Genere: {movie.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
