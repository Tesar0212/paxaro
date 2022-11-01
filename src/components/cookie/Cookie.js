import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "../UI/Flex";
import Link from "../UI/Link";
import {Button} from "../UI/Button";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

const Cookie = () => {

    const [show, setShow] = useState(true)

    show ? document.querySelector("body").style.overflow = 'hidden' : document.querySelector("body").style.overflow = 'auto'

    const hideCookie = () => {
        document.querySelector("body").style.overflow = !show ? 'hidden' : 'auto'
        setShow(!show)
    }

    return (
        <CookieOverlay show={show} >
            <CookieContainer>
                <CookieContent>
                    <CookieText>Cайт Paxaro.com использует файлы cookie и другие технологии для вашего удобства пользования сайтом,
                        анализа использования наших товаров и услуг и повышения качества рекомендаций. <CookieLink>Подробнее</CookieLink></CookieText>
                    <CookieButton $sm onClick={hideCookie}>Хорошо</CookieButton>
                </CookieContent>
            </CookieContainer>
        </CookieOverlay>
    );
};

const CookieOverlay = styled(Flex)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  border-left: 0;
  align-items: flex-end;
  z-index: 1000;
  display: ${({show}) => (show ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.6);
`

const CookieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(1, 2, 2, 0.8);
  width: 100vw;
  padding: 23px 40px;
  @media ${SCREEN.md} {
    padding: 13px 20px;
  }
`

const CookieContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  gap: 120px;
  @media ${SCREEN.lg} {
    gap: 60px;
  }
  @media ${SCREEN.md} {
    flex-direction: column;
    gap: 13px;
  }
`

const CookieText = styled.p`
  ${TYPOGRAFY.caption_3}
  color: ${COLORS.light_text};
  @media ${SCREEN.md} {
    text-align: center;
  }
`

const CookieLink = styled(Link)`
  color: inherit;
  background: inherit;
  text-decoration: underline;
  font-size: inherit;
  font-weight: inherit;
`

const CookieButton = styled(Button)``

export default Cookie;