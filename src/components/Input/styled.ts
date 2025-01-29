import styled from 'styled-components';

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const InputInner = styled.div`
  position: relative;
  display: flex;
  max-width: 762px;
  width: 95%;
  margin: 0 1rem;
`;

export const InputStyled = styled.input`
  background: #3939390d;
  border-radius: 16px;
  border: none;
  outline: none;
  padding: 24px 16px;
  width: 100%;
  font-family: Inter, sans-serif;
`;
export const SearchImg = styled.img`
  position: absolute;
  right: 16px;
  top: 25%;
  cursor: pointer;
`;
