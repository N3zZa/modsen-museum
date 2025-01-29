import React, { useEffect, useState } from 'react';
import { WorksTitle, Works, Loader } from './styled';
import { usePagination } from '../../context/PaginationContext';
import MiniCard from '../MiniCard/MiniCard';

type artData = {
  title: string;
  artist: string;
  image_url: string;
  id: number;
};

const OtherWorks = () => {
  const [artworks, setArtworks] = useState<artData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { totalPages } = usePagination();

  const fetchArtworks = async () => {
    try {
      setError(false);
      setLoading(true);

      const randomPage = Math.floor(Math.random() * totalPages) + 1;

      fetch(`https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=9`)
        .then((response) => response.json())
        .then((respData) => {
          const data = respData.data;

          const artworksWithImages = data.map((artwork: any) => ({
            id: artwork.id,
            title: artwork.title,
            artist: artwork.artist_display || 'Unknown',
            image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/80,80/0/default.jpg`,
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
          }, 1000);
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
                  title={art.title}
                  artist={art.artist}
                  image_url={art.image_url}
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
