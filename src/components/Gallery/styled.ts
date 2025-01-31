import styled from 'styled-components';

export const GalleryTitle = styled.div`
  font-family: 'Lexend Deca', serif;
  text-align: center;
  margin-bottom: 2.5rem;
  h4 {
    color: #e0a449;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
  }
`;
export const GalleryArts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-family: 'Lexend Deca', serif;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 546px;
  @media (max-width: 1024px) {
    height: 200px;
  }
`;
export const Pagination = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 12px;
`;
export const PageButton = styled.button`
  gap: 0.75rem;
  border: none;
  background: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;

  text-align: center;
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  color: #393939;

  &:hover {
    background: #f17900;
    font-weight: 600;
    line-height: 23px;
    color: #fff;
  }

  &.activePage {
    background: #f17900;
    font-weight: 600;
    line-height: 23px;
    color: #fff;
  }
`;
