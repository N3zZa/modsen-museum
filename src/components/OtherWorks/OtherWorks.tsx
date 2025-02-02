import React, { useEffect, useState } from 'react';
import { WorksTitle, Works, Loader } from './styled';
import MiniCard from 'components/MiniCard/MiniCard';
import { Artwork } from 'constants/models/artModel';

const OtherWorks = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchArtworks = async () => {
    try {
      setError(false);
      setLoading(true);

      const randomPage = Math.floor(Math.random() * 500) + 1;

      fetch(
        `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=9&fields=id,title,artist_title,image_id,date_display,artist_display,credit_line,dimensions,place_of_origin&is_public_domain=true`
      )
        .then((response) => response.json())
        .then((respData) => {
          const data = respData.data;

          const artworksWithImages = data.map((artwork: any) => ({
            id: artwork.id,
            title: artwork.title,
            artist: artwork.artist_title || 'Unknown',
            image_urlMin: !!artwork.image_id
              ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/80,80/0/default.jpg`
              : null,
            image_url: !!artwork.image_id
              ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
              : null,
            artist_display: artwork.artist_display,
            credit_line: artwork.credit_line,
            date_display: artwork.date_display,
            dimensions: artwork.dimensions,
            place_of_origin: artwork.place_of_origin,
          }));

          setArtworks(artworksWithImages);
        })
        .catch((error) => {
          setError(true);
          console.error('Ошибка при загруке артов: ', error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchArtworks();
  }, []);

  return (
    <div style={{ marginTop: '125px', padding: '0 0.75rem' }}>
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
    </div>
  );
};

export default OtherWorks;
