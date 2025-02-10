import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Gallery from 'components/Gallery/Gallery';
import OtherWorks from 'components/OtherWorks/OtherWorks';
import Search from 'components/Search/Search';

import { HomeStyled, HomeTitle } from './styled';

const Home = () => {
  return (
    <ErrorBoundary>
      <HomeStyled>
        <HomeTitle>
          let's find some <span>Art</span> here!
        </HomeTitle>
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
        <ErrorBoundary>
          <Gallery />
        </ErrorBoundary>
        <ErrorBoundary>
          <OtherWorks />
        </ErrorBoundary>
      </HomeStyled>
    </ErrorBoundary>
  );
};

export default Home;
