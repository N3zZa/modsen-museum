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
  margin: 0 16px;
`;

export const InputStyled = styled.input`
  background: #3939390d;
  border-radius: 16px;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing.input};
  width: 100%;
  font-family: ${({ theme }) => theme.font.inter};
`;
export const SearchImg = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.spacing.normal};
  top: 25%;
  cursor: pointer;
`;
