import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 127px;
  display: flex;
  align-items: center;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
export const StyledFooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  height: 127px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  p {
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -3px;
    color: black;
  }
  span {
    color: #e0a449;
    font-weight: bold;
  }
`;
