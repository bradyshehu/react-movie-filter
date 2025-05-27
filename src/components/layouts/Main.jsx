import movies from "../../data/movies";
import genres from "../../data/genres";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h1 className="my-3 text-center">Movie Catalog</h1>
        <div className="row g-3">
          {movies.map((movie) => (
            <div className="col-4">
              <div className="card">
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
