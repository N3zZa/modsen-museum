import styled from 'styled-components';
import { blocks } from 'styles/mixins';

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
  ${blocks.flexBetween}
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  height: 127px;
  color: white;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  p {
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;

  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -3px;
    color: black;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }
`;
