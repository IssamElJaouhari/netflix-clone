import { useParams, useNavigate } from "react-router-dom";

const movies = [
  {
    title: "Breaking Bad",
    description:
      "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business.",
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

function MovieDetails() {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return (
      <div className="text-center text-white mt-20">
        <h2 className="text-3xl">Movie not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-red-500 rounded"
      >
        ← Back to Home
      </button>

      <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
      <p className="mb-4 text-gray-300">{movie.description}</p>

      {/* Trailer Video */}
      <iframe
        className="w-full h-[400px] rounded-lg"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;
