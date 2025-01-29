import logoImg from '../../assets/logo.svg';
import bookmarkImg from '../../assets/bookmark.svg';
import { StyledHeader, StyledHeaderInner, Logo } from './styled';
import { Link, NavLink } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <NavLink to="/">
          <Logo>
            <img src={logoImg} alt="logo" />
            <p>
              Museum of <span>Art</span>
            </p>
          </Logo>
        </NavLink>
        <NavLink to="/favorites">
          <img src={bookmarkImg} alt="bookmark" />
          <p>Your favorites</p>
        </NavLink>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
