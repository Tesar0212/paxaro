import React from 'react';
import styled from "styled-components";
import Flex from "../UI/Flex";
import {Subtitle} from "../UI/Subtitle";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

const ContactUsSuccess = () => {
    return (
        <ContactUsSuccessContainer>
            <ContactUsSuccessContent $subtitle_1>
                Форма <TextSelected>успешно</TextSelected> отправлена, <br/>
                в ближайшее время с вами свяжутся!
            </ContactUsSuccessContent>
        </ContactUsSuccessContainer>
    );
};

const ContactUsSuccessContainer = styled(Flex) `
  justify-content: center;
  align-items: center;
  margin-top: 65px;
`

const ContactUsSuccessContent = styled(Subtitle) `
  background: ${COLORS.light_card};
  border-radius: 45px;
  padding: 68px 90px;
  @media ${SCREEN.sm} {
    padding: 34px 45px;
  }
`

const TextSelected = styled.span `
  position: relative;
  display: inline;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    background: ${COLORS.green_line};
    width: 106%;
    height: 100%;
    left: -3%;
    top: 0;
    z-index: -1;
  }
`

export default ContactUsSuccess;