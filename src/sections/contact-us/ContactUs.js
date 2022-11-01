import React, {useState} from 'react';
import SectionTitle from "../../components/UI/SectionTitle";
import Container from "../../components/UI/Container";
import ContactUsForm from "../../components/contact-us/ContactUsForm";
import styled from "styled-components";
import {Title} from "../../components/UI/Title";
import {Subtitle} from "../../components/UI/Subtitle";
import ContactUsSuccess from "../../components/contact-us/ContactUsSuccess";
import {SCREEN} from "../../assets/styles/vars/Media";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";

const ContactUs = () => {

    const [form, sendForm] = useState(true)

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        sendForm(!form)
        console.log(data)
    };

    return (

        <Section>
            <Container>
                <SectionTitle>Обратная связь</SectionTitle>
                <ContactUsTitle $title_2>Начните инвестировать с Paxaro App</ContactUsTitle>
                <ContactUsSubtitle >Заполните короткую форму и мы с вами свяжемся.</ContactUsSubtitle>
                {form ? <ContactUsForm submit={onSubmit}/>: <ContactUsSuccess/>}
            </Container>
        </Section>


    );
};

const Section = styled.section`
  margin-top: 130px;
  @media ${SCREEN.sm} {
    margin-top: 75px;
  }
`

const ContactUsTitle = styled(Title)`
  margin-top: 15px;
  @media ${SCREEN.sm} {
    margin-top: 18px;
  }
  @media ${SCREEN.xs} {
    max-width: 278px;
    margin: 18px auto 0;
  }
`

const ContactUsSubtitle = styled(Subtitle)`
  ${TYPOGRAFY.body_1}
  margin-top: 18px;
  @media ${SCREEN.sm} {
    font-size: 14px;
    margin-top: 25px;
  }
  @media ${SCREEN.xs} {
    max-width: 190px;
    margin: 25px auto 0;
  }
`

export default ContactUs;