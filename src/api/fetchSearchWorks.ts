import { SearchFormValues } from 'components/Search/Search';
import { SortArtsContext } from 'context/SortArtsContext';
import { useContext } from 'react';
import { Artwork } from 'types/artModel';

export interface fetchSearchWorksParams {
  data: SearchFormValues;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSortedArts: (art: Artwork[]) => void;
}

export const fetchSearchWorks = async ({
  data,
  setError,
  setLoading,
  setSortedArts,
}: fetchSearchWorksParams) => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(data.query)}&limit=16&fields=id,title,artist_title,image_id,date_display,artist_display,credit_line,dimensions,place_of_origin&is_public_domain=true`
    );

    const result = await response.json();
    if (result.data) {
      const artworksWithImages = result.data.map((artwork: any) => ({
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
      setSortedArts(artworksWithImages);
    }
  } catch (err) {
    setError('Error when uploading an image');
  } finally {
    setLoading(false);
  }
};
