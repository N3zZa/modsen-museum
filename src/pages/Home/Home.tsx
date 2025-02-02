import './Home.css';
import Gallery from 'components/Gallery/Gallery';
import OtherWorks from 'components/OtherWorks/OtherWorks';
import Search from 'components/Search/Search';

type Option = {
  label: string;
  value: string | number;
};

const Home = () => {
  return (
    <div className="Home">
      <h1>
        let's find some <span>Art</span> here!
      </h1>
      <Search />
      <Gallery />
      <OtherWorks />
    </div>
  );
};

export default Home;
