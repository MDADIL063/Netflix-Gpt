import Header from "./Header";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
