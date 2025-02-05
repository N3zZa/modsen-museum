import logoImg from 'assets/logo.svg';
import bookmarkImg from 'assets/logoModsen.svg';
import { routesPaths } from 'constants/routes';
import { NavLink } from 'react-router';

import { Logo, StyledFooter, StyledFooterInner } from './styled';

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        <NavLink to={routesPaths.home}>
          <Logo>
            <img src={logoImg} alt="logo" />
            <p>
              Museum of <span>Art</span>
            </p>
          </Logo>
        </NavLink>
        <img src={bookmarkImg} alt="logoMods" />
      </StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
