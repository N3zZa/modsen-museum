import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    white: '#FAFAFA',
    orange: '#E0A449',
    orangeSecondary: '#F17900',
    black: '#393939',
    input: '#757575',
    header:
      'linear-gradient(90deg,#343333 38.05%,#484848 69.22%,#282828 98.98%)',
    whiteBg: '#f9f9f9',
  },
  font: {
    lexend: 'Lexend Deca',
    inter: "'Inter', serif",
  },
  spacing: {
    xauto: '0 auto',
    normal: '16px',
    medium: '24px',
    xl: '32px',
    xxl: '48px',
    large: '100px',
    input: '24px 16px',
  },
  size: {
    small: '14px',
    normal: '16px',
    medium: '24px',
    xl: '32px',
    xxl: '48px',
    large: '64px',
  },
  lHeight: {
    small: '20px',
    medium: '40px',
    xl: '60px',
    large: '80px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
};

export default theme;
