import styled from 'styled-components';
import { blocks } from 'styles/mixins';

export const FavoriteStyled = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.lexend};
`;

export const FavoritesTitle = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xauto};

  h1 {
    font-family: ${({ theme }) => theme.font.lexend};
    font-size: ${({ theme }) => theme.size.large};
    font-weight: 700;
    line-height: ${({ theme }) => theme.lHeight.large};
    margin: 0;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.size.xxl};
      line-height: ${({ theme }) => theme.lHeight.xl};
    }
  }

  div {
    ${blocks.flexCenter}
    gap: 8px;
    margin: ${({ theme }) => theme.spacing.xauto};
    color: ${({ theme }) => theme.colors.orangeSecondary} !important;
  }
`;
