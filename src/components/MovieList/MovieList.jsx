import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ listResult = [] }) => {
  const filterResult = listResult.filter(
    ({ title }, index, arr) =>
      arr.findIndex((item) => item.title === title) === index
  );
  return (
    <div className={css.movieListContainer}>
      {filterResult.length > 0 && filterResult?.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
