import Gallery from 'components/Gallery/Gallery';
import OtherWorks from 'components/OtherWorks/OtherWorks';
import Search from 'components/Search/Search';

import { HomeStyled, HomeTitle } from './styled';

const Home = () => {
  return (
    <HomeStyled>
      <HomeTitle>
        let's find some <span>Art</span> here!
      </HomeTitle>
      <Search />
      <Gallery />
      <OtherWorks />
    </HomeStyled>
  );
};

export default Home;
