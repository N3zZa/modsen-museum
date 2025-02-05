import styled from 'styled-components';
import { blocks } from 'styles/mixins';

export const SelectBlock = styled.div`
  position: relative;
  max-width: 280px;
  span {
    color: ${({ theme }) => theme.colors.input} !important;
    font-weight: 400;
  }
`;
export const SelectArea = styled.div`
  ${blocks.flexBetween}
  padding: 8px 16px;
  cursor: pointer;
  background: #3939390d;
  border-radius: 10px;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.colors.input};
  }
  span {
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.colors.input} !important;
    font-weight: bold;
  }
`;
export const SelectOptions = styled.div`
  ${blocks.flexColumn}
  position: absolute;
  width: 100%;
  top: 55px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 10px;
  z-index: 5;
`;

export const SelectItem = styled.div`
  background: #f0f0f0;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.size.small};
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.input};
    span {
      font-weight: bold;
    }
  }

  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }
  &:last-of-type {
    border-bottom: 2px solid transparent;
    border-radius: 0 0 10px 10px;
  }
`;
