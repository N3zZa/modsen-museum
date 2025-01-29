import {
  CardBlock,
  CardImage,
  CardInfo,
  CardInfoInner,
  FavoriteButton,
} from './styled';
import favoriteImg from '../../assets/bookmark.svg';

type Props = {
  title: string;
  artist: string;
  image_url: string;
};

const truncateText = (str: string, len: number) => {
  return str.slice(0, len) + '...';
};

const Card = ({ title, artist, image_url }: Props) => {
  return (
    <CardBlock>
      <CardImage
        style={{
          background: `url(${image_url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></CardImage>
      <CardInfo>
        <CardInfoInner>
          <h4>{title.length > 20 ? truncateText(title, 20) : title}</h4>
          <h4>{artist.length > 15 ? truncateText(artist, 15) : artist}</h4>
          <p>Public</p>
        </CardInfoInner>
        <FavoriteButton>
          <img src={favoriteImg} alt="like" />
        </FavoriteButton>
      </CardInfo>
    </CardBlock>
  );
};

export default Card;
