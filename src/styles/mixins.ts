import { css } from 'styled-components';

export const blocks = {
  flexBetween: () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexColumn: () => css`
    display: flex;
    flex-direction: column;
  `,
  flexCenter: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const BlockTitle = () => css`
  font-family: ${({ theme }) => theme.font.lexend};
  text-align: center;
  margin-bottom: 40px;
  h4 {
    color: ${({ theme }) => theme.colors.orange};
    margin: 0;
    font-size: ${({ theme }) => theme.size.normal};
    font-weight: 400;
    line-height: ${({ theme }) => theme.lHeight.small};
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.xl};
    line-height: ${({ theme }) => theme.lHeight.medium};
  }
`;
