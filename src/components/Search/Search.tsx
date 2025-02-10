import { zodResolver } from '@hookform/resolvers/zod';
import { fetchSearchWorks, fetchSearchWorksParams } from 'api/fetchSearchWorks';
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

  const onSubmit = (data: SearchFormValues) => {
    fetchSearchWorks({
      data,
      setError,
      setLoading,
      setSortedArts,
    });
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
