import logoImg from 'assets/logo.svg';
import { FavoritesContext } from 'context/FavoritesContext';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { extractNationality } from 'utils/extractNationality';

import {
  DetailInfoBlock,
  DetailInfoImg,
  DetailInfoInner,
  DetailInfoStyled,
  DetailLoader,
  DetailOverview,
  FavoriteButton,
} from './styled';

const DetailInfo = () => {
  const {
    id,
    title,
    image_url,
    image_urlMin,
    artist,
    artist_display,
    credit_line,
    date_display,
    dimensions,
    place_of_origin,
  } = useLocation().state;
  const [loading, setLoading] = useState<boolean>(true);

  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('FavoritesContext используется вне FavoritesProvider');
  }

  const { toggleFavorite, isFavorite } = context;

  const artWork = {
    id,
    title,
    image_url,
    image_urlMin,
    artist,
    artist_display,
    credit_line,
    date_display,
    dimensions,
    place_of_origin,
  };

  const artistNationality = extractNationality(artist_display);

  const detailInfo = [
    { label: 'Artist nationality', value: artistNationality || 'no info' },
    { label: 'Dimensions', value: dimensions || 'no info' },
    { label: 'Credit Line', value: credit_line || 'no info' },
    { label: 'Repository', value: place_of_origin || 'no info' },
  ];

  const onClickFavoriteBtn = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleFavorite(artWork);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <main>
      {loading ? (
        <DetailLoader>Loading...</DetailLoader>
      ) : (
        <DetailInfoBlock>
          <DetailInfoInner>
            <DetailInfoImg
              style={{
                background: `url(${image_url || logoImg})`,
                backgroundSize: `${!!image_url ? 'cover' : '80px'}`,
                border: `${!!image_url ? '' : '1px solid #E0A449'}`,
              }}>
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
            </DetailInfoImg>
            <DetailInfoStyled>
              <div>
                <h2>{title}</h2>
                <h3>{artist}</h3>
                <p>{date_display}</p>
              </div>
              <DetailOverview>
                <h2>Overview</h2>
                <ul>
                  {detailInfo.map((infoString) => (
                    <li key={infoString.value}>
                      <span>{infoString.label}</span>: {infoString.value}
                    </li>
                  ))}
                </ul>
                <p>Public</p>
              </DetailOverview>
            </DetailInfoStyled>
          </DetailInfoInner>
        </DetailInfoBlock>
      )}
    </main>
  );
};

export default DetailInfo;
