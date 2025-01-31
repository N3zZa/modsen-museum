import styled from 'styled-components';

export const SelectBlock = styled.div`
  position: relative;
  max-width: 280px;
  span {
    color: #757575;
    font-weight: 400;
  }
`;
export const SelectArea = styled.div`
  display: flex;
  padding: 8px 16px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  background: #3939390d;
  border-radius: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: #757575;
  }
  span {
    font-size: 14px;
    color: #757575;
    font-weight: bold;
  }
`;
export const SelectOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 55px;
  border: 2px solid #757575;
  border-radius: 10px;
  z-index: 5;
`;

export const SelectItem = styled.div`
  background: rgb(240, 240, 240);
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #757575;
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
