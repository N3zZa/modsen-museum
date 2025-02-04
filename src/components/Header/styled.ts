import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-bottom: 100px;
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  width: 100%;
  height: 127px;
  display: flex;
  align-items: center;
`;
export const StyledHeaderInner = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  height: 127px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  p {
    font-size: 18px;
  }
  button {
    background: none;
    border: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    margin: 0;
    margin-top: auto;
    margin-bottom: -3px;
  }
  span {
    color: #e0a449;
    font-weight: bold;
  }
`;
export const BurgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 2rem;
  top: 5rem;
  gap: 0.25rem;
  background: #343333;
  border: 1px solid rgb(67, 67, 67);
  border-radius: 10px;
  padding: 0 1rem;
  z-index: 1;
`;
