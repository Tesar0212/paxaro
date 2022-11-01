import React from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {StyledInput} from "../UI/Input";
import Link from "../UI/Link";
import Flex from "../UI/Flex";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

const ContactUsForm = ({submit}) => {

    const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});

    return (
        <ContactUsFormContainer onSubmit={handleSubmit(submit)}>
            <ContactUsInputList>
                <ContactUsInputContainer>
                    <ContactUsInput style={{ borderColor : errors?.firstName && 'red'}} {...register("firstName", {required: true})} type="text" placeholder="Имя*"></ContactUsInput>
                    <ContactUsLabel style={{ color : errors?.firstName && 'red'}}>Имя*</ContactUsLabel>

                </ContactUsInputContainer>
                <ContactUsInputContainer>
                    <ContactUsInput style={{ borderColor : errors?.email && 'red'}} {...register("email", {required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}})} type="email" placeholder="Ваш e-mail*"></ContactUsInput>
                    <ContactUsLabel style={{ color : errors?.email && 'red'}}>Ваш e-mail*</ContactUsLabel>
                </ContactUsInputContainer>
                <ContactUsInputContainer>
                    <ContactUsInput {...register("lastName")} type="text" placeholder="Фамилия"></ContactUsInput>
                    <ContactUsLabel>Фамилия</ContactUsLabel>
                </ContactUsInputContainer>
                <ContactUsInputContainer>
                    <ContactUsInput {...register("tel")} type="tel" placeholder="Ваш номер"></ContactUsInput>
                    <ContactUsLabel>Ваш номер</ContactUsLabel>
                </ContactUsInputContainer>
            </ContactUsInputList>
            <ContactUsInputCtrl>
                <ContactUsNotice>Нажимая на кнопку, вы даете согласие на <ContactUsLink href='#'>обработку
                    персональных данных </ContactUsLink>
                    и соглашаетесь с <ContactUsLink href='#'>политикой
                        конфиденциальности</ContactUsLink></ContactUsNotice>
                <ContactUsSubmit $submit value="Отправить форму" type="submit"></ContactUsSubmit>
            </ContactUsInputCtrl>
        </ContactUsFormContainer>
    );
};

const ContactUsFormContainer = styled.form`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 45px;
  margin-top: 80px;

  @media ${SCREEN.sm} {
    margin-top: 65px;
    row-gap: 25px;
  }
`

const ContactUsLabel = styled.label `
  left: 12px;
  top: -20px;
  position: absolute;
  ${TYPOGRAFY.body_2}
  color: ${COLORS.green_line};
  display: none;
`

const ContactUsInput = styled(StyledInput)`
  
  &:active+${ContactUsLabel},
  &:focus+${ContactUsLabel}{
    display: block;
  }
  
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`

const ContactUsLink = styled(Link)`
  display: inline;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: underline;
`

const ContactUsNotice = styled.p`
  ${TYPOGRAFY.caption_3}
  color: #797979;
  max-width: 437px;
  @media ${SCREEN.lg} {
    text-align: center;
    max-width: 420px;
  }

  @media ${SCREEN.sm} {
    text-align: start;
  }
`

const ContactUsSubmit = styled(StyledInput)``

const ContactUsInputList = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: 35px;
  column-gap: 20px;
  @media ${SCREEN.lg} {
    justify-content: center;
  }
`

const ContactUsInputCtrl = styled(Flex) `
  justify-content: space-between;
  width: 100%;
  row-gap: 40px;
  @media ${SCREEN.lg} {
    align-items: center;
    flex-direction: column;
  }
`

const ContactUsInputContainer = styled(Flex) `
  flex-direction: column;
  max-width: 460px;
  width: 100%;
  position: relative;
`

export default ContactUsForm;