import styled from 'styled-components';
import { blocks, BlockTitle } from 'styles/mixins';

export const GalleryTitle = styled.div`
  ${BlockTitle}
`;
export const GalleryArts = styled.div`
  ${blocks.flexCenter}
  gap: 48px;
  font-family: ${({ theme }) => theme.font.lexend};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Loader = styled.div`
  ${blocks.flexCenter}
  height: 546px;
  @media (max-width: 1024px) {
    height: 200px;
  }
`;
export const Pagination = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 12px;
`;
export const PageButton = styled.button`
  gap: 12px;
  border: none;
  background: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;

  text-align: center;
  font-family: ${({ theme }) => theme.font.lexend};
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background: ${({ theme }) => theme.colors.orangeSecondary};
    font-weight: 600;
    line-height: 23px;
    color: #fff;
  }

  &.activePage {
    background: ${({ theme }) => theme.colors.orangeSecondary};
    font-weight: 600;
    line-height: 23px;
    color: #fff;
  }
`;
