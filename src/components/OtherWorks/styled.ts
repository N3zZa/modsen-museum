import styled from 'styled-components';
import { blocks, BlockTitle } from 'styles/mixins';

export const OtherWorksStyled = styled.div`
  margin-top: 125px;
  padding: 0 12px;
`;

export const WorksTitle = styled.div`
  ${BlockTitle}
`;
export const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.normal};
  font-family: ${({ theme }) => theme.font.lexend};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 387px);
    gap: ${({ theme }) => theme.spacing.normal};
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 400px);
  }
`;
export const Loader = styled.div`
  ${blocks.flexCenter}
  height: 546px;
  width: 100%;
  h2 {
    position: absolute;
    right: calc(50% - 59px);
    left: calc(50% - 59px);
    width: fit-content;
  }
  @media (max-width: 1024px) {
    height: 200px;
  }
`;
