import React from 'react';
import { CardBlock, CardImage,CardInfo,CardInfoInner,FavoriteButton } from './styled';
import favoriteImg from "../../assets/bookmark.svg"

type Props = {
  title: string;
  artist: string|null;
  image_url: string;
};

const Card = ({title, artist, image_url}: Props) => {
  console.log(image_url)
  return (
    <CardBlock>
      <CardImage style={{background: `url(${image_url})`}}></CardImage>
      <CardInfo>
        <CardInfoInner>
          <h4>{title}</h4>
          <h4>{artist}</h4>
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
