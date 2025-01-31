import styled from 'styled-components';

export const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 2.5rem 0;
  font-family: 'Lexend Deca', serif;
  max-height: 600px;
  overflow-y: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 387px);
    gap: 1rem;
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
  font-family: 'Lexend Deca', serif;
`;
