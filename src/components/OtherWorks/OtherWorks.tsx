import { fetchArtworks } from 'api/fetchOther';
import MiniCard from 'components/MiniCard/MiniCard';
import React, { useEffect, useState } from 'react';
import { Artwork } from 'types/artModel';

import { Loader, OtherWorksStyled, Works, WorksTitle } from './styled';

const OtherWorks = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchArtworks({ setArtworks, setLoading, setError });
  }, []);

  return (
    <OtherWorksStyled>
      <div>
        <WorksTitle>
          <h4>Here some more</h4>
          <h2>Other works for you</h2>
        </WorksTitle>
        <Works>
          {error && <h2>Error when uploading arts</h2>}
          {loading ? (
            <Loader>
              <h2>Loading...</h2>
            </Loader>
          ) : (
            <>
              {artworks?.map((art) => (
                <MiniCard
                  key={art.id}
                  id={art.id}
                  title={art.title}
                  artist={art.artist}
                  image_url={art.image_url}
                  image_urlMin={art.image_urlMin}
                  artist_display={art.artist_display}
                  credit_line={art.credit_line}
                  date_display={art.date_display}
                  dimensions={art.dimensions}
                  place_of_origin={art.place_of_origin}
                />
              ))}
            </>
          )}
        </Works>
      </div>
    </OtherWorksStyled>
  );
};

export default OtherWorks;
