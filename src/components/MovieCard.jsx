import { Link, Outlet } from "react-router-dom";
import "../styles/Movies.css";

const MovieCard = (movie, actor) => {
  const dateFormat = (dateString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <div className="card">
        <div className="card-info">
          <h2>{movie.title}</h2>
          <p className="release-date">{dateFormat(movie.release_date)}</p>

          <p className="summary">{movie.opening_crawl.slice(0, 150)}...</p>

          <Link
            to="/film"
            state={{ movie: movie, actor: actor }}
            className="movie-link"
          >
            More info
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieCard;
