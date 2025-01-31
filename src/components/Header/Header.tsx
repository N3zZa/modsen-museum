import logoImg from '../../assets/logo.svg';
import bookmarkImg from '../../assets/bookmark.svg';
import homeImg from '../../assets/home.svg';
import burgerImg from '../../assets/burger.svg';
import { StyledHeader, StyledHeaderInner, Logo, BurgerMenu } from './styled';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
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
          <nav style={{ display: 'flex', gap: '1rem' }}>
            {location.pathname !== '/' && (
              <NavLink to="/">
                <img src={homeImg} alt="home" />
                <p>Home</p>
              </NavLink>
            )}
            <NavLink to="/favorites">
              <img src={bookmarkImg} alt="bookmark" />
              <p>Your favorites</p>
            </NavLink>
          </nav>
        ) : (
          <>
            <button onClick={() => openBurgerMenu(!burgerMenu)}>
              <img width={30} src={burgerImg} alt="menu" />
            </button>
            {burgerMenu && (
              <BurgerMenu>
                {location.pathname !== '/' && (
                  <NavLink onClick={() => openBurgerMenu(false)} to="/">
                    <img src={homeImg} alt="home" />
                    <p>Home</p>
                  </NavLink>
                )}
                <NavLink onClick={() => openBurgerMenu(false)} to="/favorites">
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
