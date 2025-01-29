import styled from 'styled-components';

export const MiniCardBlock = styled.div`
  padding: 25px 13px;
  background: #ffffff;
  border: 1px solid #f0f1f1;
  max-height: 80px;

  @media (max-width: 500px) {
    max-width: 380px;
  }
`;
export const MiniCardInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MiniCardImage = styled.div`
  width: 80px;
  height: 80px;
`;
export const MiniCardInfo = styled.div`
  display: flex;
  gap: 1rem;
  h4 {
    margin: 0;
  }
`;
export const MiniCardInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-family: Inter;
    font-size: 15.35px;
    font-weight: 400;
    line-height: 26.32px;
    letter-spacing: -0.01em;
    color: #e0a449;
  }
  h4:first-of-type {
    font-size: 17.54px;
    font-weight: 500;
    line-height: 26.32px;
    letter-spacing: -0.03em;
    color: #393939;
  }
  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -5px;
    font-family: Inter;
    font-size: 15.35px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  border-radius: 50%;
  background: #f9f9f9;
  padding: 17px;
  cursor: pointer;
  width: 59px;
  height: 59px;
`;
