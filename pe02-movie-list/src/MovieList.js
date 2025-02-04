import React, { useState } from "react";

const MovieList = () => {
  const movies = [
    { title: "Avatar", genre: "Sci-Fi", releaseYear: 2009 },
    { title: "La La Land", genre: "Romance", releaseYear: 2016 },
    { title: "John Wick", genre: "Action", releaseYear: 2014 },
    { title: "Gravity", genre: "Sci-Fi", releaseYear: 2013 },
    { title: "Pride & Prejudice", genre: "Romance", releaseYear: 2005 }
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === "All Genres" 
    ? movies 
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => alert(movie.title)}>
            {movie.title} - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
