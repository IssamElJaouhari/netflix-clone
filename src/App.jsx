import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const initialMovies = [
  {
    title: "Breaking Bad",
    description:
      "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
    posterURL: "/breakinbad.png",
    rating: 9.5,
  },
  {
    title: "Priso break",
    description: "A space epic exploring love and survival.",
    posterURL: "/prisonbreak.png",
    rating: 8.6,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => {
    if (!newMovie.title || !newMovie.posterURL || newMovie.rating <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-500 via-black to-red-500">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">🎬 Welcome to MovieFlix</h1>
          <p className="text-lg text-gray-300 mt-2">
            Find and add your favorite movies
          </p>
        </div>
      </div>

      <Filter setFilter={setFilter} addMovie={addMovie} />

      <MovieList movies={movies} filter={filter} />
    </div>
  );
}

export default App;
