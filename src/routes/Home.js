import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    /**
     * Async function ensures completion of one certain code ("Promise fulfilled") before continuing
     * 1. fetch > if successful > 2. save json
     */
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minumum_rating=9.0&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies.slice(0, 20));
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    console.log(typeof movies)
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;