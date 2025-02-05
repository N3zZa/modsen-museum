import { SetStateAction } from 'react';
import { Artwork } from 'types/artModel';

type FetchArtworksParams = {
  setArtworks: React.Dispatch<React.SetStateAction<Artwork[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const fetchArtworks = async ({
  setArtworks,
  setLoading,
  setError,
}: FetchArtworksParams) => {
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
