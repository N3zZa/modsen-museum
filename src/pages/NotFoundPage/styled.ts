import styled from 'styled-components';

export const Message = styled.h1`
  font-family: ${({ theme }) => theme.font.lexend};
  margin: ${({ theme }) => theme.spacing.xauto};
  max-width: fit-content;
`;
