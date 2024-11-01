import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieById } from "../../servises/search";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [filmPageInfo, setFilmPageInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const resultById = async () => {
      try {
        setLoader(true);
        if (movieId) {
          const response = await fetchMovieById(movieId);
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
        <div>
          <div>
            <img src={backdrop_path} alt="title" />
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
          </div>
        </div>
      ) : (
        <p>Page not found</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
