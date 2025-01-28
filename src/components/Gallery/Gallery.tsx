import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { GalleryTitle, GalleryArts } from './styled'

type Props = {}


type artData = {
    title: string;
    artist: string;
    image_url: string;
    id: number;
}

const Gallery = (props: Props) => {
    const [artworks, setArtworks] = useState<artData[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);


     const fetchArtworks = async (page: number) => {
         try {
             setError(false)
             setLoading(true)
             fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=3`)
            .then(response => response.json())
            .then(respData => {
                const data = respData.data;
                const pagination = respData.pagination;
                const artworksWithImages = data.map((artwork: any) => ({
                  id: artwork.id,
                  title: artwork.title,
                  artist: artwork.artist_display || "Unknown",
                  image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/387,444/0/default.jpg`,
                }));
            
                setArtworks(artworksWithImages);
                setTotalPages(pagination.total_pages || 1);
            })
            .catch(error => {
                setError(true)
                console.error("Ошибка при загруке артов: ", error)
            }).finally(() => setLoading(false))
        } catch (error) {
           setError(true)
        }
    }

    const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchArtworks(currentPage);

  }, [currentPage]);

  return (
    <div style={{marginTop: "125px"}}>
        <GalleryTitle>
            <h4>Topics for you</h4>
            <h2>Our special gallery</h2>
        </GalleryTitle>
        <GalleryArts>
            {error && <h2>Error when uploading arts</h2>}
            {loading ? (
                <h2>Loading...</h2>
            ) : (
            <>
                {artworks?.map((art) => (
                <Card key={art.id} title={art.title} artist={art.artist} image_url={art.image_url}/>
                ))}
            </>
            )}
            
        </GalleryArts>
        <div className="flex justify-center mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2 disabled:bg-gray-300"
            >
              Назад
            </button>
            <span className="px-4 py-2">{currentPage}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded ml-2 disabled:bg-gray-300"
            >
              Вперёд
            </button>
          </div>
    </div>
  )
}

export default Gallery