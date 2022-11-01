import React from 'react';
import SectionTitle from "../../components/UI/SectionTitle";
import Container from "../../components/UI/Container";
import styled, {css} from "styled-components";
import {Title} from "../../components/UI/Title";
import {Subtitle} from "../../components/UI/Subtitle";
import List from "../../components/UI/List";
import Flex from "../../components/UI/Flex";
import ListItem from "../../components/UI/ListItem";
import {COLORS} from "../../assets/styles/vars/Colors";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {SCREEN} from "../../assets/styles/vars/Media";

const Benefits = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>Преимущества</SectionTitle>
                <BenefitsTitle $title_2 >Почему мы уверены в Paxaro App?</BenefitsTitle>
                <BenefitsSubtitle $subtitle_2>
                    Мы проверили инструмент на реальных инвестициях - он позволяет <br/>
                    управлять активами просто и быстро
                </BenefitsSubtitle>
                <BenefitsList >
                    <BenefitsItem $black_card>
                        <BenefitsItemFront $black_card>
                            <BenefitsItemTitle $title_3 $light_text $mw_230 $green_bg>
                                <TextSelection $green_bg>Активы </TextSelection>
                                хранятся
                                на бирже
                            </BenefitsItemTitle>
                        </BenefitsItemFront>
                        <BenefitsItemBack $black_card>
                            <BenefitsItemText $subtitle_2 $light_text>
                                Ваши деньги не хранятся
                                у нас. Все активы размещены
                                на официальной бирже.
                                Она страхует их и шифрует
                                данные. Взлом этих систем
                                невозможен.
                            </BenefitsItemText>
                        </BenefitsItemBack>
                    </BenefitsItem>
                    <BenefitsItem $light_card>
                        <BenefitsItemFront $light_card>
                            <BenefitsItemTitle $title_3 $dark_text $green_bg>
                                <TextSelection $green_bg>Алгоритм </TextSelection>
                                минимизирует
                                риски
                            </BenefitsItemTitle>
                        </BenefitsItemFront>
                        <BenefitsItemBack $light_card>
                            <BenefitsItemText $subtitle_2 $dark_text>
                                Риски минимизированы.
                                Наш алгоритм умеет
                                учитывать все изменения
                                курсов и рыночные тренды.
                                Поэтому пакет постоянно
                                диверсифицируется
                                в соответствии с ситуацией
                                на бирже.
                            </BenefitsItemText>
                        </BenefitsItemBack>
                    </BenefitsItem>
                    <BenefitsItem $green_gradient_card>
                        <BenefitsItemFront $green_gradient_card>
                            <BenefitsItemTitle $title_3 $light_text $black_bg>
                                <TextSelection $black_bg>Доходность </TextSelection>
                                зависит от сроков
                            </BenefitsItemTitle>
                        </BenefitsItemFront>
                        <BenefitsItemBack $green_gradient_card>
                            <BenefitsItemText $subtitle_2 $light_text>
                                Доходность зависит
                                от сроков. Чем дольше
                                инвестиции находятся
                                в обороте, тем лучше
                                алгоритм с ними работает.
                                Практика показала, что
                                инвестиции в долгую
                                приносят большую прибыль.
                            </BenefitsItemText>
                        </BenefitsItemBack>
                    </BenefitsItem>
                </BenefitsList>
            </Container>
        </Section>

    );
};

const Section = styled.section`
  margin-top: 130px;
  @media ${SCREEN.sm} {
    margin-top: 110px;
  }
`

const BenefitsTitle = styled(Title)`
  margin: 15px auto 0;
  @media ${SCREEN.sm} {
    margin: 15px auto 0;
    max-width: 270px;
  }
`

const BenefitsSubtitle = styled(Subtitle)`
  margin: 24px auto 0;
  @media ${SCREEN.sm} {
    margin: 24px auto 0;
    max-width: 334px;
  }`

const BenefitsList = styled(List)`
  gap: 20px;
  justify-content: space-between;
  margin-top: 111px;

  @media ${SCREEN.xxl} {
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 40px;
  }

  @media ${SCREEN.md} {
    row-gap: 20px;
  }

  @media ${SCREEN.sm} {
    margin-top: 45px;
  }
`

const BenefitsItemFront = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 45px;
  backface-visibility: hidden;
  transition: 0.3s;
  padding: 40px;

  ${props => props.$black_card && css`
    background: ${COLORS.black_bg};
  `}

  ${props => props.$light_card && css`
    background: ${COLORS.light_card};
  `}

  ${props => props.$green_gradient_card && css`
    background: ${COLORS.green_gradient_card};
  `}

  @media ${SCREEN.sm} {
    padding: 0;
    position: relative;
    height: unset;
    background: transparent;
  }
`

const BenefitsItemBack = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 45px;
  backface-visibility: hidden;
  transition: 0.3s;
  transform: rotateY(180deg);
  padding: 56px 30px;

  ${props => props.$black_card && css`
    background: ${COLORS.black_bg};
  `}

  ${props => props.$light_card && css`
    background: ${COLORS.light_card};
  `}

  ${props => props.$green_gradient_card && css`
    background: ${COLORS.green_gradient_card};
  `}

  @media ${SCREEN.sm} {
    padding: 0;
    position: relative;
    height: unset;
    background: transparent;
    transform: unset;
    margin-top: 25px;
  }
`

const BenefitsItem = styled(ListItem)`
  width: 400px;
  height: 383px;
  position: relative;
  perspective: 600px;

  &:hover ${BenefitsItemFront} {
    transform: rotateY(180deg);
  }

  &:hover ${BenefitsItemBack} {
    transform: rotateY(360deg);
  }

  @media ${SCREEN.sm} {
    width: 335px;
    height: 368px;
    border-radius: 45px;
    padding: 40px 32px 40px 27px;

    &:hover ${BenefitsItemFront} {
      transform: unset;
    }

    &:hover ${BenefitsItemBack} {
      transform: unset;
    }

    ${props => props.$black_card && css`
        background: ${COLORS.black_bg};
    `}

    ${props => props.$light_card && css`
        background: ${COLORS.light_card};
    `}

    ${props => props.$green_gradient_card && css`
        background: ${COLORS.green_gradient_card};
    `}
  }
`

const BenefitsItemTitle = styled(Title)`
  max-width: 171px;
  height: fit-content;
  text-align: start;

  ${props => props.$dark_text && css`
      color: ${COLORS.dark_bg};
  `}

  ${props => props.$light_text && css`
        color: ${COLORS.light_text};
  `}

  @media ${SCREEN.sm} {
  
    ${props => props.$black_bg && css`
      background: ${COLORS.black_bg};
    `}

    ${props => props.$green_bg && css`
      background: ${COLORS.green_line};
    `}
  
    max-width: 270px;
    
    ${props => props.$mw_230 && css`
      max-width: 230px;
    `}
   
    padding: 0 15px 0 13px;
  }
`

const TextSelection = styled.span`
  display: inline;
  position: relative;
  z-index: 10;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -5%;
    width: 110%;
    height: 100%;
    z-index: -1;

    ${props => props.$black_bg && css`
      background: ${COLORS.black_bg};
    `}

    ${props => props.$green_bg && css`
      background: ${COLORS.green_line};
    `}
  }

  @media ${SCREEN.sm} {
    &:before {
      background: transparent;
    }
  }
`

const BenefitsItemText = styled(Subtitle)`
  text-align: start;

  ${props => props.$dark_text && css`
      color: ${COLORS.dark_bg};
  `}

  ${props => props.$light_text && css`
        color: ${COLORS.light_text};
  `}
  
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.body_1}
  }
}
`

export default Benefits;