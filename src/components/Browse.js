import Header from "./Header";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const gptSearchVal = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptSearchVal ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
