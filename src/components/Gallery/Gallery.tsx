import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import {
  GalleryTitle,
  GalleryArts,
  Loader,
  Pagination,
  PageButton,
} from './styled';
import arrowImg from '../../assets/arrow.svg';
import { Artwork } from '../../constants/models/artModel';

const pageCount = [1, 2, 3, 4];

const Gallery = () => {
  const [artworks, setArtworks] = useState<Record<number, Artwork[]>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchArtworks = async (page: number) => {
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

  const handlePageChange = (page: number) => {
    if (pageCount.length < page || page < 1) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchArtworks(currentPage);
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
