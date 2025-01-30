import React from 'react';
import './Home.css';
import Input from './../../components/Input/Input';
import Gallery from '../../components/Gallery/Gallery';
import OtherWorks from '../../components/OtherWorks/OtherWorks';

type Props = {};

const Home = (props: Props) => {
  return (
      <div className="Home">
        <h1>
          let's find some <span>Art</span> here!
        </h1>
        <Input placeholder="Search Art, Artist, Work..." />
        <Gallery />
        <OtherWorks />
      </div>
  );
};

export default Home;
