import styled from 'styled-components';
import { blocks } from 'styles/mixins';

export const MiniCardBlock = styled.div`
  padding: 25px 13px;
  background: #ffffff;
  border: 1px solid #f0f1f1;
  max-height: 80px;
  cursor: pointer;

  @media (max-width: 500px) {
    max-width: 380px;
  }
`;
export const MiniCardInner = styled.div`
  ${blocks.flexBetween}
`;
export const MiniCardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
export const MiniCardInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.normal};
  h4 {
    margin: 0;
  }
`;
export const MiniCardInfoInner = styled.div`
  ${blocks.flexColumn}
  h4 {
    font-family: ${({ theme }) => theme.font.inter};
    font-size: 15.35px;
    font-weight: 400;
    line-height: 26.32px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.orange};
  }
  h4:first-of-type {
    font-size: 17.54px;
    font-weight: 500;
    line-height: 26.32px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -5px;
    font-family: ${({ theme }) => theme.font.inter};
    font-size: 15.35px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.whiteBg};
  padding: ${({ theme }) => theme.spacing.normal};
  cursor: pointer;
  width: 59px;
  height: 59px;
  &:hover svg {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
