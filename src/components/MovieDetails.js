function MovieDetails({ year, imdb, rating, runtime }) {
  return (
    <div>
      <li>Year: {year}</li>
      <li>IMDb Link: {`https://www.imdb.com/title/${imdb}`}</li>
      <li>Rating {rating}</li>
      <li>Runtime: {runtime}</li>
    </div>
  );
}

export default MovieDetails