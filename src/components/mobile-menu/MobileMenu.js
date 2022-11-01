import React from 'react';
import ListItem from "../UI/ListItem";
import Link from "../UI/Link";
import {Button} from "../UI/Button";
import Container from "../UI/Container";
import HeaderLanguageSelect from "../header/HeaderLanguageSelect";
import styled from "styled-components";
import List from "../UI/List";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";

const MobileMenu = () => {
    return (
        <NavMenuContainer>
            <NavMenuMain>
                <Container>
                    <NavListMain>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#" $large_sm>О продукте</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#" $large_sm>Блог</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#" $large_sm>О компании</Link></ListItem>
                    </NavListMain>
                    <NavListSecondary>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Пользовательское соглашение</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Политика конфиденциальности</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Политика использования файлов cookie</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Условия пробного периода</Link></ListItem>
                    </NavListSecondary>
                    <NavListLogin>
                        <NavListLoginTitle>Личный кабинет</NavListLoginTitle>
                        <ListItem><Button $login_sm>Зарегестрироваться</Button></ListItem>
                        <ListItem><Button $transparent>Войти</Button></ListItem>
                    </NavListLogin>
                </Container>
            </NavMenuMain>
            <NavMenuFooter>
                <Container>
                    <NavListSocial>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Instagram</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">VC</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Twitter</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">YouTube</Link></ListItem>
                        <ListItem><Link href="src/components/mobile-menu/MobileMenu#">Telegram</Link></ListItem>
                    </NavListSocial>
                </Container>
                <HeaderLanguageSelect mobile/>
            </NavMenuFooter>
        </NavMenuContainer>
    );
};

const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const NavMenuMain = styled.div``

const NavMenuFooter = styled.div``

const NavListMain = styled(List)`
  gap: 18px;
  flex-direction: column;
  padding: 20px 0 24px;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${COLORS.gray_line};
    opacity: 0.3;
    bottom: 0;
    position: absolute;
    left: 0;
  }
`

const NavListSecondary = styled(List)`
  gap: 18px;
  flex-direction: column;
  padding: 24px 0;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${COLORS.gray_line};
    opacity: 0.3;
    bottom: 0;
    position: absolute;
    left: 0;
  }
`

const NavListLogin = styled(List)`
  row-gap: 18px;
  column-gap: 14px;
  flex-wrap: wrap;
  padding: 24px 0;
`

const NavListLoginTitle = styled.p`
  ${TYPOGRAFY.subtitle_1}
  color: ${COLORS.light_text};
  width: 100%;
  text-align: start;  
`

const NavListSocial = styled(List)`
  justify-content: space-between;
  padding: 24px 0;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${COLORS.gray_line};
    opacity: 0.3;
    bottom: 0;
    position: absolute;
    left: 0;
  }
`

export default MobileMenu;