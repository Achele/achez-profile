import { useLocation } from "react-router-dom";
import Characters from "../sections/Characters";
import "../styles/Movies.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function SingleMovie() {
  const film = useLocation();
  const { movie } = film.state;
  console.log(movie);

  const people = useLocation();
  const { actor } = people.state;
  console.log(`"actor:" ${actor}`);
  return (
    <>
      <NavBar />
      <main>
        <section className="details-card">
          <div className="details">
            <h1>{movie.title}</h1>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
          </div>

          <div className=" description">
            <p>Description</p>
            <p>{movie.opening_crawl}</p>
          </div>

          <section className="characters">
            <h3>Characters</h3>
            <Characters />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
