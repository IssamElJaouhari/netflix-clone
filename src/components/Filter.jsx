import { useState } from "react";

function Filter({ setFilter, addMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const [previewImage, setPreviewImage] = useState(null); // Store the preview of the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a preview URL
      setPreviewImage(imageUrl);
      setNewMovie({ ...newMovie, posterURL: imageUrl });
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <input
        type="text"
        placeholder="🔎 Search by title..."
        className="w-1/3 p-3 rounded bg-gray-800 text-white"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setFilter((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
      <input
        type="number"
        placeholder="⭐ Min rating..."
        className="w-1/6 p-3 rounded bg-gray-800 text-white"
        value={rating}
        onChange={(e) => {
          setRating(Number(e.target.value));
          setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }));
        }}
      />
      <button
        className="p-3 bg-red-600 text-white rounded"
        onClick={() => {
          setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
          setPreviewImage(null);
          document.getElementById("addMovieModal").showModal();
        }}
      >
        ➕ Add Movie
      </button>

      {/* Movie Add Modal */}
      <dialog
        id="addMovieModal"
        className="p-6 bg-gray-900 rounded-md text-white"
      >
        <h2 className="text-xl font-bold mb-2">Add a New Movie</h2>

        {/* Movie Title */}
        <input
          type="text"
          placeholder="Title"
          className="block p-2 w-full bg-gray-800 text-white mb-2"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />

        {/* Movie Description */}
        <input
          type="text"
          placeholder="Description"
          className="block p-2 w-full bg-gray-800 text-white mb-2"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />

        {/* Movie Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="block p-2 w-full bg-gray-800 text-white mb-2"
          onChange={handleImageUpload}
        />

        {/* Image Preview */}
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="w-full h-40 object-cover rounded mt-2"
          />
        )}

        {/* Movie Rating */}
        <input
          type="number"
          placeholder="Rating"
          className="block p-2 w-full bg-gray-800 text-white mb-2"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />

        {/* Add Movie Button */}
        <button
          className="p-3 bg-green-500 text-white rounded w-full"
          onClick={() => {
            if (!newMovie.posterURL) {
              alert("Please upload an image.");
              return;
            }
            addMovie(newMovie);
            document.getElementById("addMovieModal").close();
          }}
        >
          ✅ Add
        </button>
      </dialog>
    </div>
  );
}

export default Filter;
