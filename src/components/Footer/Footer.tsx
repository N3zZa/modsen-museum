import logoImg from "../../assets/logo.svg"
import bookmarkImg from "../../assets/logoModsen.svg"
import { Logo, StyledFooter,StyledFooterInner } from './styled';

type Props = {};

const Footer = (props: Props) => {
  return (
     <StyledFooter>
      <StyledFooterInner>
        <Logo>
          <img src={logoImg} alt="logo" />
          <p>Museum of <span>Art</span></p>
        </Logo>
        <img src={bookmarkImg} alt="logoMods" />
      </StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
