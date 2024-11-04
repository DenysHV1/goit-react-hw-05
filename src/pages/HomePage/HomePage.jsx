import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { searchTrendMovies } from "../../servises/search";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const HomePage = () => {
  const [trendResult, setTrendResult] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getTrends = async () => {
      try {
        setLoader(true);
        setError(false);
        const response = await searchTrendMovies();
        setTrendResult(response.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    getTrends();
  }, []);
  console.log(trendResult);
  return (
    <section className={css.homePageSection}>
      <h1 className={css.homePageTitle}>Popular movies</h1>
      {loader && <Loader />}
      {!error ? <MovieList listResult={trendResult} /> : <Error />}
    </section>
  );
};

export default HomePage;
