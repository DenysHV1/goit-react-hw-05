import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { searchMovieById } from "../../servises/search";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1)

  const [filmPageInfo, setFilmPageInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const resultById = async () => {
      try {
        setLoader(true);
        if (movieId) {
          const response = await searchMovieById(movieId);
          setFilmPageInfo(response);
        }
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    resultById();
  }, [movieId]);

  const { title, backdrop_path, overview, genres, vote_average } = filmPageInfo;
  return (
    <>
      {loader && <Loader />}
      {!error ? (
        <section>
          <button onClick={goBack}>Go back</button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="title"
            />
          </div>
          <div>
            <h1>{title}</h1>
            <p>User score: {vote_average}%</p>
            <p>Overview</p>
            <p>{overview}</p>
            <p>Genres</p>
            <ul>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <p>Page not found</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
