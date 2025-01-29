import React from 'react';
import './Home.css';
import Input from './../../components/Input/Input';
import Gallery from '../../components/Gallery/Gallery';
import OtherWorks from '../../components/OtherWorks/OtherWorks';
import { PaginationProvider } from '../../context/PaginationContext';

type Props = {};

const Home = (props: Props) => {
  return (
    <PaginationProvider>
      <div className="Home">
        <h1>
          let's find some <span>Art</span> here!
        </h1>
        <Input placeholder="Search Art, Artist, Work..." />
        <Gallery />
        <OtherWorks />
      </div>
    </PaginationProvider>
  );
};

export default Home;
