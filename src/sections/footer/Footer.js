import React from 'react';
import styled, {css} from "styled-components";

import Container from "../../components/UI/Container";
import Flex from "../../components/UI/Flex";
import Link from "../../components/UI/Link";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import {Button} from "../../components/UI/Button";

import FooterLogoImg from "../../assets/images/logo.svg";
import AppStoreLogoImg from "../../assets/images/footer-app-store.svg";
import GooglePlayLogoImg from "../../assets/images/footer-google-play.svg";
import ArrowUpImg from "../../assets/images/arrow-up.svg";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterUp>
                    <FooterLinks>
                        <FooterLogo src={FooterLogoImg}></FooterLogo>
                        <FooterLinksContainer>
                            <FooterLink href='#'>
                                <FooterAppStore src={AppStoreLogoImg}></FooterAppStore>
                            </FooterLink>
                            <FooterLink href='#'>
                                <FooterGooglePlay src={GooglePlayLogoImg}></FooterGooglePlay>
                            </FooterLink>
                        </FooterLinksContainer>
                    </FooterLinks>
                    <FooterNav >
                        <FooterNavList>
                            <FooterNavItem><FooterLink href='#'>О продукте</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Блог</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>О компании</FooterLink>
                            </FooterNavItem>
                        </FooterNavList>
                        <FooterNavList>
                            <FooterNavItem><FooterLink href='#'>История</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Преимущества</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>База знаний</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Как работает?</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Подписка</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Как начать?</FooterLink></FooterNavItem>
                        </FooterNavList>
                        <FooterNavList $display_md>
                            <FooterNavItem><FooterLink href='#'>Instagram</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>VC</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Twitter</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>YouTube</FooterLink></FooterNavItem>
                            <FooterNavItem><FooterLink href='#'>Telegram</FooterLink></FooterNavItem>
                        </FooterNavList>
                        <FooterLogin $login>Личный кабинет</FooterLogin>
                    </FooterNav>
                </FooterUp>
                <FooterDown>
                    <FooterCopyright>© 2021 Kadex Enterprise pte Ltd.</FooterCopyright>
                    <FooterInfoWrapper>
                        <FooterInfo>
                            <FooterInfoItem>
                                <FooterLink>Пользовательское соглашение</FooterLink>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <FooterLink>Политика конфиденциальности</FooterLink>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <FooterLink>Политика использования файлов cookie</FooterLink>
                            </FooterInfoItem>
                            <FooterInfoItem>
                                <FooterLink>Условия пробного периода</FooterLink>
                            </FooterInfoItem>
                        </FooterInfo>
                    </FooterInfoWrapper>
                    <FooterGoUp href="#header">
                        <FooterGoUpTitle>Вернуться наверх</FooterGoUpTitle>
                        <FooterGoUpBtn src={ArrowUpImg}></FooterGoUpBtn>
                    </FooterGoUp>
                </FooterDown>
            </Container>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
  margin-top: 100px;
  padding: 56px 0 41px;
  background: ${COLORS.black_bg};
  @media ${SCREEN.sm} {
    margin-top: 80px;
    padding: 40px 0;
  }
`

const FooterUp = styled(Flex)`
  justify-content: space-between;
  @media ${SCREEN.lg} {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
`

const FooterLinks = styled(Flex)`
  flex-direction: column;
  gap: 45px;
  @media ${SCREEN.lg} {
    align-items: center;
  }
`

const FooterLogo = styled.img`
  height: 46px;
  width: 148px;
`

const FooterLinksContainer = styled(Flex)`
  flex-direction: column;
  gap: 18px;
  @media ${SCREEN.lg} {
    flex-direction: row;
  }
`

const FooterLink = styled(Link)`
  ${TYPOGRAFY.caption_2}
  text-align: center;
  letter-spacing: 0.01em;
  color: ${COLORS.light_text};
`

const FooterAppStore = styled.img``

const FooterGooglePlay = styled.img``

const FooterNav = styled(Flex)`
  gap: 60px;
`

const FooterNavList = styled(List)`
  flex-direction: column;
  gap: 14px;
  @media ${SCREEN.lg} {
    flex-direction: row;
    gap: 21px;
    display: none;
    ${props => props.$display_md && css`
        display: flex;
    `}
  }
`

const FooterNavItem = styled(ListItem)``

const FooterLogin = styled(Button)`
  margin-left: 24px;
  @media ${SCREEN.lg} {
    display: none;
  }
`

const FooterDown = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 37px;
  @media ${SCREEN.lg} {
    align-items: center;
    margin-top: 0;
    
  }
`

const FooterCopyright = styled.p`
  ${TYPOGRAFY.body_2}
  color: ${COLORS.light_bg};
  width: 100%;
  @media ${SCREEN.lg} {
    order: 2;
    width: auto;
    margin-top: 32px;
  }
`

const FooterInfo = styled(List)`
  
  @media ${SCREEN.lg} {
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${SCREEN.xs} {
    width: 100%;
  }
`

const FooterInfoWrapper = styled(Flex)`
  margin-top: 26px;
  @media ${SCREEN.lg} {
    width: 100%;
    margin-top: 40px;
  }
`

const FooterInfoItem = styled(ListItem)`
  padding: 0 12px;
  position: relative;

  @media ${SCREEN.lg} {
    padding: 12px 0;


    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    width: 1px;
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    background: ${COLORS.light_text};
  }

  &:first-child {
    padding-left: unset;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`

const FooterGoUpTitle = styled.p`
  ${TYPOGRAFY.caption_2}
  text-align: center;
  letter-spacing: 0.01em;
  color: ${COLORS.light_text};
  transition: .25s;

  @media ${SCREEN.lg} {
    display: none;
  }
`

const FooterGoUp = styled(Link)`
  display: flex;
  gap: 4px;
  align-items: center;
  height: fit-content;
  margin-top: 26px;

  &:hover ${FooterGoUpTitle} {
    color: ${COLORS.green_line};
  }

  @media ${SCREEN.lg} {
    order: 3 ;
    margin-top: 30px;
  }
`

const FooterGoUpBtn = styled.img``


export default Footer;