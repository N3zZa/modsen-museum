import logoImg from 'assets/logo.svg';
import { routesPaths } from 'constants/routes';
import { FavoritesContext } from 'context/FavoritesContext';
import { useContext } from 'react';
import { NavLink } from 'react-router';

import {
  CardBlock,
  CardImage,
  CardInfo,
  CardInfoInner,
  FavoriteButton,
} from './styled';

type CardProps = {
  title: string;
  artist: string;
  image_url: string | null;
  image_urlMin: string | null;
  id: number;
  artist_display: string;
  credit_line: string;
  date_display: string;
  dimensions: string;
  place_of_origin: string;
};

const truncateText = (str: string, len: number) => {
  return str.slice(0, len) + '...';
};

const Card = ({ title, artist, image_url, id, ...props }: CardProps) => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('FavoritesContext используется вне FavoritesProvider');
  }

  const { toggleFavorite, isFavorite } = context;
  const artWork = { title, artist, image_url, id, ...props };

  const onClickFavoriteBtn = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleFavorite(artWork);
  };

  return (
    <CardBlock>
      <NavLink
        to={routesPaths.card + id}
        state={{
          title,
          artist,
          image_url,
          id,
          ...props,
        }}>
        <CardImage
          loading={'lazy'}
          src={!!image_url ? image_url : ''}
          style={{
            background: `url(${!!image_url ? image_url : logoImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${!!image_url ? 'cover' : '50px'}`,
            backgroundPosition: 'center',
            border: `${!!image_url ? '' : '1px solid #E0A449'}`,
          }}></CardImage>
      </NavLink>
      <CardInfo>
        <CardInfoInner>
          <h4>{title.length > 20 ? truncateText(title, 20) : title}</h4>
          <h4>{artist.length > 15 ? truncateText(artist, 15) : artist}</h4>
          <p>Public</p>
        </CardInfoInner>
        <FavoriteButton onClick={(e) => onClickFavoriteBtn(e)}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill={`${isFavorite(id) ? '#E0A449' : 'none'}`}
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
              stroke="#E0A449"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FavoriteButton>
      </CardInfo>
    </CardBlock>
  );
};

export default Card;
