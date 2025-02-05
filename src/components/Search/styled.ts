import styled from 'styled-components';

export const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.normal};
  margin: 40px 0;
  font-family: ${({ theme }) => theme.font.lexend};
  max-height: 600px;
  overflow-y: auto;

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
export const SearchMessage = styled.p`
  position: absolute;
  left: calc(50% - 107px);
  text-align: center;
  min-width: 215px;
  width: fit-content;
  font-family: ${({ theme }) => theme.font.lexend};
`;
