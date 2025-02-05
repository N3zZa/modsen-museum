import { fetchArtworks } from 'api/fetchGallery';
import arrowImg from 'assets/arrow.svg';
import Card from 'components/Card/Card';
import { pageCount } from 'constants/paginationPages';
import { useEffect, useState } from 'react';
import { Artwork } from 'types/artModel';

import {
  GalleryArts,
  GalleryTitle,
  Loader,
  PageButton,
  Pagination,
} from './styled';

const Gallery = () => {
  const [artworks, setArtworks] = useState<Record<number, Artwork[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    if (pageCount.length < page || page < 1) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchArtworks({
      page: currentPage,
      setLoading,
      setError,
      setArtworks,
      artworks,
    });
  }, [currentPage]);

  return (
    <div style={{ marginTop: '125px', padding: '0 0.75rem' }}>
      <GalleryTitle>
        <h4>Topics for you</h4>
        <h2>Our special gallery</h2>
      </GalleryTitle>
      <GalleryArts>
        {error && <h2>Error when uploading arts</h2>}
        {loading ? (
          <Loader>
            <h2>Loading...</h2>
          </Loader>
        ) : (
          <>
            {artworks[currentPage]?.map((art) => (
              <Card
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
      </GalleryArts>
      <Pagination className="flex justify-center mt-4">
        <img
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ cursor: 'pointer', transform: 'rotate(180deg)' }}
          src={arrowImg}
          alt="->"
        />
        {pageCount.map((num: number) => (
          <PageButton
            onClick={() => handlePageChange(num)}
            key={num}
            className={currentPage === num ? 'activePage' : ''}>
            {num}
          </PageButton>
        ))}
        <img
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ cursor: 'pointer' }}
          src={arrowImg}
          alt="->"
        />
      </Pagination>
    </div>
  );
};

export default Gallery;
