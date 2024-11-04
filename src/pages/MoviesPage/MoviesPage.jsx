import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovieByName } from "../../servises/search";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import SearchFilms from "../../components/searchFilms/searchFilms";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [listByName, setListByName] = useState([]);

  const takeQuery = (query) => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) return;

    const searchByName = async () => {
      try {
        setLoader(true);
        const response = await searchMovieByName(query);
        setListByName(response.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    searchByName();
  }, [searchParams]);

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
