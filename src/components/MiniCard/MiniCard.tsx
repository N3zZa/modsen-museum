import favoriteImg from '../../assets/bookmark.svg';
import {
  FavoriteButton,
  MiniCardBlock,
  MiniCardImage,
  MiniCardInfo,
  MiniCardInfoInner,
  MiniCardInner,
} from './styled';

type MiniCardProps = {
  title: string;
  artist: string;
  image_url: string;
};

const truncateText = (str: string, len: number) => {
  return str.slice(0, len) + '...';
};

const MiniCard = ({ title, artist, image_url }: MiniCardProps) => {
  return (
    <MiniCardBlock>
      <MiniCardInner>
        <MiniCardInfo>
          <MiniCardImage
            style={{
              background: `url(${image_url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></MiniCardImage>
          <MiniCardInfoInner>
            <h4>{title.length > 16 ? truncateText(title, 16) : title}</h4>
            <h4>{artist.length > 13 ? truncateText(artist, 13) : artist}</h4>
            <p>Public</p>
          </MiniCardInfoInner>
        </MiniCardInfo>
        <FavoriteButton>
          <img src={favoriteImg} alt="like" />
        </FavoriteButton>
      </MiniCardInner>
    </MiniCardBlock>
  );
};

export default MiniCard;
