import styled from 'styled-components';

export const Works = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  font-family: 'Lexend Deca', serif;

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
export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 546px;
  @media (max-width: 1024px) {
    height: 200px;
  }
`;
