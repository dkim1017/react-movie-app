import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(typeof movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetails
              year={movie.year}
              imdb={movie.imdb_code}
              rating={movie.rating}
              runtime={movie.runtime}
            />
        </div>
      )}
    </div>
  );
}

export default Detail;
