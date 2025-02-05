import bookmarkImg from 'assets/bookmark.svg';
import burgerImg from 'assets/burger.svg';
import homeImg from 'assets/home.svg';
import logoImg from 'assets/logo.svg';
import { routesPaths } from 'constants/routes';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

import {
  BurgerMenu,
  HeaderNav,
  Logo,
  StyledHeader,
  StyledHeaderInner,
} from './styled';

const Header = () => {
  const { pathname } = useLocation();
  const [burgerMenu, openBurgerMenu] = useState<boolean>(false);
  const screenWidth = window.screen.width;

  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [burgerMenu]);

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo>
          <img src={logoImg} alt="logo" />
          <p>
            Museum of <span>Art</span>
          </p>
        </Logo>

        {screenWidth > 600 ? (
          <HeaderNav>
            {pathname !== '/' && (
              <NavLink to={routesPaths.home}>
                <img src={homeImg} alt="home" />
                <p>Home</p>
              </NavLink>
            )}
            <NavLink to={routesPaths.favorites}>
              <img src={bookmarkImg} alt="bookmark" />
              <p>Your favorites</p>
            </NavLink>
          </HeaderNav>
        ) : (
          <>
            <button onClick={() => openBurgerMenu(!burgerMenu)}>
              <img width={30} src={burgerImg} alt="menu" />
            </button>
            {burgerMenu && (
              <BurgerMenu>
                {pathname !== '/' && (
                  <NavLink
                    onClick={() => openBurgerMenu(false)}
                    to={routesPaths.home}>
                    <img src={homeImg} alt="home" />
                    <p>Home</p>
                  </NavLink>
                )}
                <NavLink
                  onClick={() => openBurgerMenu(false)}
                  to={routesPaths.favorites}>
                  <img src={bookmarkImg} alt="bookmark" />
                  <p>Your favorites</p>
                </NavLink>
              </BurgerMenu>
            )}
          </>
        )}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
