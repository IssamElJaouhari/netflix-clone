import { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";

const initialMovies = [
  {
    title: "Breaking Bad",
    description:
      "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts.",
    posterURL: "/breakinbad.png",
    rating: 9.5,
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    title: "Prison Break",
    description:
      "Michael Scofield devises an elaborate plan to help his brother escape prison.",
    posterURL: "/prisonbreak.png",
    rating: 8.6,
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
  },
];

function Home() {
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
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-blue-500 via-black to-red-500">
        <h1 className="text-5xl font-bold text-white">
          🎬 Welcome to MovieFlix
        </h1>
      </div>

      {/* Filter and Movie List */}
      <Filter setFilter={setFilter} addMovie={addMovie} />
      <MovieList movies={movies} filter={filter} />
    </div>
  );
}

export default Home;
