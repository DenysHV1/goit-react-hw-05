import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { searchTrendMovies } from "../../servises/search";
import Loader from "../../components/Loader/Loader";
const HomePage = () => {

  const [trendResult, setTrendResult] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const getTrends = async () => {
      try {
        setLoader(true)
        setError(false)
        const response = await searchTrendMovies();
        setTrendResult(response.results);
      } catch (error) {
        setError(true);
        console.error(error);
      }finally{
        setLoader(false)
      }
    };
    getTrends();
  }, []);

  return (
    <section>
      {loader && <Loader/>}
      {!error ? <MovieList listResult={trendResult} /> : <p>Something went wrong. Try again</p>}
    </section>
  );
};

export default HomePage;
