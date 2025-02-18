import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.title}`}>
      <div className="relative min-w-[220px] group cursor-pointer transition-transform transform hover:scale-110">
        {/* Movie Poster */}
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="rounded-lg shadow-lg w-full h-80 object-cover"
        />

        {/* Hover Overlay (Semi-transparent) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <h3 className="text-lg font-bold text-white">{movie.title}</h3>
          <p className="text-gray-300 text-sm mt-1 line-clamp-3">
            {movie.description}
          </p>
          <p className="text-yellow-500 font-bold mt-2">⭐ {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
