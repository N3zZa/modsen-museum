import styled from 'styled-components';
import { blocks } from 'styles/mixins';

export const DetailInfoBlock = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.lexend};
  h2 {
    font-size: ${({ theme }) => theme.size.xl};
    font-weight: 400;
    line-height: ${({ theme }) => theme.lHeight.medium};
    margin-top: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    color: ${({ theme }) => theme.colors.orange};
  }

  p {
    font-size: ${({ theme }) => theme.size.normal};
    font-weight: 700;
    line-height: 20px;
  }

  @media (max-width: 1280px) {
    padding: 0 16px;
    h2 {
      font-size: ${({ theme }) => theme.size.medium};
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: ${({ theme }) => theme.size.small};
    }
  }
`;

export const DetailInfoInner = styled.div`
  display: flex;
  gap: calc(10px + 5%);

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const DetailInfoImg = styled.div`
  position: relative;
  max-width: 497px;
  min-width: 350px;
  width: 100%;
  height: 570px;
  background-repeat: no-repeat !important;
  background-size: cover;
  background-position: center !important;

  @media (max-width: 768px) {
    max-width: 350px;
    height: 400px;
  }
`;

export const FavoriteButton = styled.div`
  ${blocks.flexCenter}
  position: absolute;
  top: 16px;
  right: 16px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 59px;
  height: 59px;
  text-align: center;
  padding: 0;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.orange};
    }
  }
`;
export const DetailInfoStyled = styled.div`
  ${blocks.flexColumn}
  justify-content: space-between;
  max-width: 60%;

  @media (max-width: 768px) {
    padding: 0 16px;
    max-width: 100%;
  }
`;

export const DetailOverview = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  li {
    margin: 16px 0;
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.normal};
    line-height: 20px;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
  }
  p {
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    h2 {
      margin: 0;
      margin-top: 16px;
    }
  }
`;

export const DetailLoader = styled.div`
  height: 400px;
`;
