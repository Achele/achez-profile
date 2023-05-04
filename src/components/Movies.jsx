// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

export default function MoviesTrail() {
  const url = "https://swapi.dev/api/films";
  const { loading, data } = useFetch(url);

  let trimData = data.results;

  return (
    <section className="movie-container">
      <h3>Starwar Movies</h3>
      <p>
        I have included this section to show you one of the things I love to do
        aside engineering and profering solutions. I enjoy watching movies,
        particularly sci-fi.
      </p>
      {loading && <Loading />}
      <div className="movie-list">
        {trimData &&
          trimData.slice(0, 3).map((movies) => {
            return <MovieCard key={movies.index} {...movies} />;
          })}
      </div>
    </section>
  );
}
