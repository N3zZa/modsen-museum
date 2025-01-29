import styled from 'styled-components';

export const CardBlock = styled.div`
  display: flex;
  position: relative;
  max-width: 387px;
  width: 100%;
  height: 514px;
  padding: 1rem 0;
`;
export const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: 444px;
`;
export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto auto 0 auto;
  width: 100%;
  max-width: 285px;
  height: 85px;
  padding: 24px;
  padding-top: 30px;
  z-index: 1;
  background: #fff;
  border: 1px solid #f0f1f1;
  h4 {
    margin: 0;
  }
`;
export const CardInfoInner = styled.div`
  h4 {
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
