import React, {useState} from 'react';
import Container from "../../components/UI/Container";
import Link from "../../components/UI/Link";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import {Button} from "../../components/UI/Button";
import MobileMenu from "../../components/mobile-menu/MobileMenu";
import HeaderLanguageSelect from "../../components/header/HeaderLanguageSelect";
import styled from "styled-components";
import LogoImg from "../../assets/images/logo.svg";
import LogoImgMin from "../../assets/images/logo-min.svg";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";


const Header = () => {
    const [show, setShow] = useState(false)

    const ShowMobileMenu = () => {
        document.querySelector("body").style.overflow = !show ? 'hidden' : 'auto'
        setShow(!show)
    }

    return (
        <HeaderBackground show={show} id="header">
            <HeaderUp show={show}>
                <Container>
                    <HeaderContainer show={show}>
                        <HeaderLeft>
                            <Link href="src/sections/header/Header#">
                                {show ?  <LogoMin src={LogoImgMin}/> : <HeaderLogo src={LogoImg}/>}
                            </Link>
                        </HeaderLeft>
                        <HeaderCollapse>
                            <HeaderListUp>
                                <ListItem><Link $large href="src/sections/header/Header#">О продукте</Link></ListItem>
                                <ListItem><Link $large href="src/sections/header/Header#">Блог</Link></ListItem>
                                <ListItem><Link $large href="src/sections/header/Header#">О компании</Link></ListItem>
                            </HeaderListUp>
                            <HeaderListLogin>
                                <ListItem><Button $login_sm >Зарегестрироваться</Button></ListItem>
                                <ListItem><Button $transparent >Войти</Button></ListItem>
                                <ListItem><HeaderLanguageSelect/></ListItem>
                            </HeaderListLogin>
                        </HeaderCollapse>
                        <NavToggler onClick={ShowMobileMenu}>{show ?  <CloseIcon/> : <BurgerIcon/>}</NavToggler>
                        <MobileMenuContainer show={show}>
                            <MobileMenu/>
                        </MobileMenuContainer>
                    </HeaderContainer>
                </Container>
            </HeaderUp>
            <Nav>
                <Container>
                    <HeaderListDown >
                        <ListItem><Link href="src/sections/header/Header#">История</Link></ListItem>
                        <ListItem><Link href="src/sections/header/Header#">Преимущества</Link></ListItem>
                        <ListItem><Link href="src/sections/header/Header#">База знаний</Link></ListItem>
                        <ListItem><Link href="src/sections/header/Header#">Как работает?</Link></ListItem>
                        <ListItem><Link href="src/sections/header/Header#">Подписка</Link></ListItem>
                        <ListItem><Link href="src/sections/header/Header#">Как начать?</Link></ListItem>
                    </HeaderListDown>
                </Container>
            </Nav>

        </HeaderBackground>
    );
};

const HeaderBackground = styled.header`
  background: ${COLORS.black_bg};
  height: ${({show}) => (show ? '81px' : '')};

`

const HeaderUp = styled.div`
  padding: 22px 0;
  @media ${SCREEN.lg} {
    position: ${({show}) => (show ? 'fixed' : 'relative')};
    background: ${({show}) => (show ? `${COLORS.black_bg}` : '')};
    width: 100vw;
    top: 0;
  }
`

const HeaderLogo = styled.img`
  min-width: 148px;
  max-width: 148px;
  max-height: 46px;
  @media ${SCREEN.lg} {
    min-width: 118px;
    height: 37px;
  }
`

export const LogoMin = styled.img`
  height: 37px;
  z-index: 1000;
`

const Nav = styled.nav`
  background: ${COLORS.dark_bg};
  @media ${SCREEN.lg} {
    display: none;
  }
`
const HeaderLeft = styled.div`
  display: flex;
  margin : 0 40px 0 0;
`

const HeaderCollapse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  

  @media ${SCREEN.lg} {
    display: none;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavToggler = styled.button`
  background: transparent;
  display: none;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  @media ${SCREEN.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const HeaderListUp = styled(List)`
  gap: 30px;
`

const HeaderListLogin = styled(List)`
  gap: 14px;
`

const HeaderListDown = styled(List)`
  gap: 30px;
  padding: 12px 0;
`


const BurgerIcon = styled.span`
  position: absolute;
  width: 18px;
  height: 2px;
  background: ${COLORS.light_text};

  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${COLORS.light_text};
    left: 0;
  }

  &:after {
    top: -7px;
  }

  &:before {
    bottom: -7px;
  }
`

const CloseIcon = styled.span`
  position: absolute;
  width: 18px;
  height: 2px;
  background: transparent;

  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${COLORS.light_text};
    left: 0;
  }

  &:after {
    transform: rotate(45deg);
  }

  &:before {
    transform: rotate(-45deg);
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 100;
  background: ${COLORS.black_bg};
  width: 100vw;
  height: calc(100% - 80px);
  overflow: auto;
  top: 0;
  transform: translateY(80px);  
  left: 0;
  opacity: 0;
  visibility: hidden;
  @media ${SCREEN.lg} {
    opacity: ${({show}) => (show ? 1 : 0)};
    visibility: ${({show}) => (show ? 'visible' : 'hidden')};
    transform: translate(Y) ${({show}) => (show ? '0' : '-100vh')};
    transition: 0.3s;
  }
`

export default Header;