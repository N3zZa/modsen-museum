import favoriteImg from '../../assets/bookmark.svg';
import {
  FavoriteButton,
  MiniCardBlock,
  MiniCardImage,
  MiniCardInfo,
  MiniCardInfoInner,
  MiniCardInner,
} from './styled';
import logoImg from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

type MiniCardProps = {
  title: string;
  artist: string;
  image_url: string | null;
  image_urlMin: string | null;
  id: number;
};

const truncateText = (str: string, len: number) => {
  return str.slice(0, len) + '...';
};

const MiniCard = ({ title, artist, image_url,image_urlMin, id }: MiniCardProps) => {
  return (
    <NavLink to={`/card/${id}`} state={{ title, artist, image_url, id }}>
      <MiniCardBlock>
        <MiniCardInner>
          <MiniCardInfo>
            <MiniCardImage
              style={{
                background: `url(${!!image_urlMin ? image_urlMin : logoImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${!!image_urlMin ? 'cover' : '50px'}`,
                backgroundPosition: 'center',
                border: `${!!image_urlMin ? '' : '1px solid #E0A449'}`,
              }}></MiniCardImage>
            <MiniCardInfoInner>
              <h4>{title.length > 16 ? truncateText(title, 16) : title}</h4>
              <h4>{artist.length > 13 ? truncateText(artist, 13) : artist}</h4>
              <p>Public</p>
            </MiniCardInfoInner>
          </MiniCardInfo>
          <FavoriteButton>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
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
        </MiniCardInner>
      </MiniCardBlock>
    </NavLink>
  );
};

export default MiniCard;
