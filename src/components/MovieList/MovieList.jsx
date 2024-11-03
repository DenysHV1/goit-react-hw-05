import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ listResult = [] }) => {
  const filterResult = listResult.filter(
    ({ title }, index, arr) =>
      arr.findIndex((item) => item.title === title) === index
  );
  return (
    <div className={css.movieListContainer}>
      {filterResult.length > 0 &&
        filterResult?.map(({ id, title, backdrop_path }) => {
          return (
            <Link key={id} to={`/movies/${id}`}>
              <img
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : `https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg`
                }
                alt=""
              />
              <h2>{title}</h2>
            </Link>
          );
        })}
    </div>
  );
};

export default MovieList;
