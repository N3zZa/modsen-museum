import { Artwork } from 'types/artModel';

type FetchArtworksParams = {
  favorites: string[];
  setArtworks: React.Dispatch<React.SetStateAction<Artwork[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const fetchFavorites = async ({
  setArtworks,
  favorites,
  setLoading,
  setError,
}: FetchArtworksParams) => {
  try {
    setError(false);
    setLoading(true);
    const requests = favorites.map((id) =>
      fetch(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,image_id,date_display,artist_display,credit_line,dimensions,place_of_origin`
      ).then((response) => response.json())
    );

    const results = await Promise.all(requests);
    const artworks = results.map((result) => result.data);

    const artworksWithImages = artworks.map((artwork: any) => ({
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
  } catch (error) {
    setError(true);
    console.error('Ошибка при загруке артов: ', error);
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
};
