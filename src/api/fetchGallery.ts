import { Artwork } from 'types/artModel';

interface FetchArtworksParams {
  setArtworks: React.Dispatch<React.SetStateAction<Record<number, Artwork[]>>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  artworks: Record<number, Artwork[]>;
}

export const fetchArtworks = async ({
  page,
  setError,
  setLoading,
  setArtworks,
  artworks,
}: FetchArtworksParams) => {
  try {
    if (artworks[page]) {
      setLoading(false);
      return;
    }

    setError(false);
    setLoading(true);
    fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}&limit=3&fields=id,title,artist_title,image_id,date_display,artist_display,credit_line,dimensions,place_of_origin`
    )
      .then((response) => response.json())
      .then((respData) => {
        const data = respData.data;
        const artworksWithImages = data.map((artwork: any) => ({
          id: artwork.id,
          title: artwork.title,
          artist: artwork.artist_title || 'Unknown',
          image_url: !!artwork.image_id
            ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
            : null,
          image_urlMin: !!artwork.image_id
            ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/80,80/0/default.jpg`
            : null,
          artist_display: artwork.artist_display,
          credit_line: artwork.credit_line,
          date_display: artwork.date_display,
          dimensions: artwork.dimensions,
          place_of_origin: artwork.place_of_origin,
        }));

        setArtworks((prev) => ({ ...prev, [page]: artworksWithImages }));
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
