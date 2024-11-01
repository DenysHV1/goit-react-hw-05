import { useEffect, useState } from "react";

import { fetchMovieByName } from "../../servises/search";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import SearchFilms from "../../components/searchFilms/searchFilms";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
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
        const response = await fetchMovieByName(name);
        setListByName(response.results);
        console.log(response.results);
        setQuery("");
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    searchByName(query);
  }, [query]);

  return (
    <section>
      <SearchFilms takeQuery={takeQuery} />
      <div>
        {loader && <Loader />}
        <MovieList listResult={listByName} />
      </div>
    </section>
  );
};

export default MoviesPage;
