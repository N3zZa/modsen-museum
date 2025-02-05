import styled from 'styled-components';
import { blocks } from 'styles/mixins';

export const StyledHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: 127px;
  display: flex;
  align-items: center;
`;

export const StyledHeaderInner = styled.div`
  ${blocks.flexBetween}
  position: relative;
  max-width: 1280px;
  margin: ${({ theme }) => theme.spacing.xauto};
  padding: 0 32px;
  width: 100%;
  height: 127px;
  color: white;

  a {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  p {
    font-size: 18px;
  }
  button {
    background: none;
    border: none;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;

  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -3px;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }
`;
export const BurgerMenu = styled.nav`
  ${blocks.flexColumn}
  position: absolute;
  right: 32px;
  top: 80px;
  gap: 4px;
  background: #343333;
  border: 1px solid #434343;
  border-radius: 10px;
  padding: 0 16px;
  z-index: 1;
`;
