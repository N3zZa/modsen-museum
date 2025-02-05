import { zodResolver } from '@hookform/resolvers/zod';
import MiniCard from 'components/MiniCard/MiniCard';
import { Select } from 'components/Select/Select';
import { SortArtsContext } from 'context/SortArtsContext';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'utils/hooks/useDebounce';
import { searchSchema } from 'utils/zod';
import { z } from 'zod';

import Input from '../Input/Input';
import { SearchMessage, Works } from './styled';

export type SearchFormValues = z.infer<typeof searchSchema>; // Автоматический тип формы

const Search: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const context = useContext(SortArtsContext);

  if (!context) {
    throw new Error('SortArtsContext используется вне SortArtsProvider');
  }

  const { sortedArts, setSortedArts } = context;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    mode: 'onChange',
  });

  const searchValue = watch('query', '');
  const debouncedSearch = useDebounce(searchValue, 750);

  const onSubmit = async (data: SearchFormValues) => {
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

  useEffect(() => {
    if (debouncedSearch.trim().length < 3) return;

    onSubmit({ query: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}>
        <Input
          placeholder="Search Art, Artist, Work..."
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <Select />
      </div>
      {errors.query && (
        <SearchMessage style={{ color: 'red' }}>
          {errors.query.message}
        </SearchMessage>
      )}

      {loading && <SearchMessage role="status">Loading...</SearchMessage>}

      {error && <SearchMessage style={{ color: 'red' }}>{error}</SearchMessage>}
      <Works role="minicardslist">
        {sortedArts.length > 0 &&
          sortedArts.map((art) => (
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
      </Works>
    </form>
  );
};

export default Search;
