export interface Artwork {
  id: number;
  title: string;
  artist: string;
  image_url: string | null;
  image_urlMin: string | null;
  artist_display: string;
  credit_line: string;
  date_display: string;
  dimensions: string;
  place_of_origin: string;
}
