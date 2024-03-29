import Header from "./Header";
import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
