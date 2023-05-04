import useFetch from "../hooks/useFetch";

export default function Characters() {
  const url = "https://swapi.dev/api/people";
  const { data } = useFetch(url);

  let actors = data.results;
  console.log(actors);
  return (
    <>
      {actors &&
        actors.map((actor) => {
          return (
            <li className="character-list" key={actor.index}>
              {actor.name}
            </li>
          );
        })}
    </>
  );
}
