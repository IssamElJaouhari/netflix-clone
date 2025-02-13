import MovieCard from "./MovieCard";

function MovieList({ movies, filter }) {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="p-6 text-white">
      {" "}
      <h2 className="text-2xl font-bold mb-4">👌My top Movies</h2>
      <div className="overflow-x-auto scrollbar-hide flex gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400">No movies found...</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
