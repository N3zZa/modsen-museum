import MiniCard from 'components/MiniCard/MiniCard';
import { FavoritesContext } from 'context/FavoritesContext';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Loader, Works } from './styled';

const FavoritesList = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('FavoritesContext используется вне FavoritesProvider');
  }

  const { favorites } = context;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false));
  }, []);

  return (
    <div style={{ marginTop: '125px', padding: '0 0.75rem' }}>
      <div>
        <Works>
          {loading ? (
            <Loader>
              <h2>Loading...</h2>
            </Loader>
          ) : (
            <>
              {favorites.length !== 0 ? (
                favorites?.map((art) => (
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
                ))
              ) : (
                <h2
                  style={{
                    position: 'absolute',
                    textAlign: 'center',
                    left: '15%',
                    right: '15%',
                    marginTop: '-50px',
                  }}>
                  You didn't add anything to your favorites.
                </h2>
              )}
            </>
          )}
        </Works>
      </div>
    </div>
  );
};

export default FavoritesList;
