import React from 'react';
import SectionTitle from "../../components/UI/SectionTitle";
import Container from "../../components/UI/Container";
import OffersPost from "../../components/offers/OffersPost";
import styled from "styled-components";
import {Title} from "../../components/UI/Title";
import List from "../../components/UI/List";
import {SCREEN} from "../../assets/styles/vars/Media";

const Offers = () => {

    const Posts = [
        {
            id: 1, title: 'Advanced', price: '1199', characteristics: [
                {id: 1, name: 'Ребалансировка'},
                {id: 2, name: `Базовая стратегия ведения портфеля `},
                {id: 3, name: '5 реферальных уровней'},
                {id: 4, name: 'Специальный раздел обучения Paxaro education'},
                {id: 5, name: 'i30 - index'},
                {id: 6, name: 'i50 - index'},
                {id: 7, name: 'i100 - index'},
                {id: 8, name: 'Кастомизированный index iCustom'},
                {id: 9, name: 'Привилегия участия в новых продуктах платформы '},
                {id: 10, name: 'Возможность настройки базовых индексов'},
            ]
        },
        {
            id: 2, title: 'Prime', price: '740', characteristics: [
                {id: 1, name: 'Ребалансировка'},
                {id: 2, name: 'Базовая стратегия ведения портфеля '},
                {id: 3, name: 'i30 - index'},
                {id: 4, name: '3 реферальных уровня'},
                {id: 5, name: 'Специальный раздел обучения Paxaro Education'},
            ]
        },
    ]

    return (
        <Section>
            <Container>
                <SectionTitle>Предложения</SectionTitle>
                <OffersTitle $title_2>Планы подписки</OffersTitle>
                <OffersList >
                    {Posts.map(post =>
                        <OffersPost post={post} key={post.id}/>
                    )}
                </OffersList>
            </Container>
        </Section>
    );
};

const Section = styled.section`
  margin-top: 130px;
  @media ${SCREEN.sm} {
    margin-top: 56px;
  }
`

const OffersTitle = styled(Title)`
  margin-top: 15px;
  @media ${SCREEN.sm} {
    margin-top: 18px;
  }
`

const OffersList = styled(List)`
  margin-top: 60px;
  flex-direction: column;
  row-gap: 80px;
  @media ${SCREEN.sm} {
    margin-top: 40px;
    row-gap: 60px;
  }
`

export default Offers;