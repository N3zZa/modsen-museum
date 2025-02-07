import styled from 'styled-components';

export const HomeStyled = styled.main`
  color: ${({ theme }) => theme.colors.black};

  span {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }
`;

export const HomeTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.lexend};
  font-size: ${({ theme }) => theme.size.large};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lHeight.large};
  max-width: 684px;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xauto};
  text-transform: capitalize;
  margin-bottom: 64px;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: ${({ theme }) => theme.lHeight.xl};
  }
`;
