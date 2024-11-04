import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovieByName } from "../../servises/search";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import SearchFilms from "../../components/searchFilms/searchFilms";

const MoviesPage = () => {
  const [query, setQuery] = useState(() => {
    const saveQuery = localStorage.getItem("query");
    return saveQuery ? JSON.parse(saveQuery) : "";
  });
  const [loader, setLoader] = useState(false);
  const [listByName, setListByName] = useState([]);

  const takeQuery = (name) => {
    setQuery(name);
  };

  useEffect(() => {
    const searchByName = async (name) => {
      if (!name) {
        return;
      }
      try {
        setLoader(true);
        const response = await searchMovieByName(name);
        setListByName(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    searchByName(query);
    localStorage.setItem("query", JSON.stringify(query));
  }, [query]);

  return (
    <section className={css.moviesPageStyle}>
      <h1 className="visually-hidden">Search films</h1>
      <SearchFilms takeQuery={takeQuery} />
      <div>
        {loader && <Loader />}
        <MovieList listResult={listByName} />
      </div>
    </section>
  );
};

export default MoviesPage;
