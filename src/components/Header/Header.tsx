import logoImg from "../../assets/logo.svg"
import bookmarkImg from "../../assets/bookmark.svg"
import { StyledHeader,StyledHeaderInner,Logo } from './styled';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo>
          <img src={logoImg} alt="logo" />
          <p>Museum of <span>Art</span></p>
        </Logo>
        <div>
          <img src={bookmarkImg} alt="bookmark" />
          <p>Your favorites</p>
        </div>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
