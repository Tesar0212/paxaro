import React from 'react';
import Container from "../../components/UI/Container";
import styled from "styled-components";
import Flex from "../../components/UI/Flex";
import LandingImages from "../../assets/images/landing-img.png";
import {Title} from "../../components/UI/Title";
import {Subtitle} from "../../components/UI/Subtitle";
import {Button} from "../../components/UI/Button";
import {SCREEN} from "../../assets/styles/vars/Media";

const Landing = () => {
    return (
        <Section>
            <Container>
                <LandingWrapper>
                    <LandingTitle $title_1>
                        Стань частью новой <br/>
                        экономической реальности
                    </LandingTitle>
                    <LandingSubtitle $subtitle_2>
                        Инвестируй в криптовалюту и управляй <br/>
                        цифровыми активами с помощью Smart Portfolio
                    </LandingSubtitle>
                    <LandingButton>Попробовать бесплатно</LandingButton>
                    <LandingImg src={LandingImages}></LandingImg>
                </LandingWrapper>
            </Container>
        </Section>
    );
};

const Section = styled.div`
  overflow: hidden;
`

const LandingWrapper = styled(Flex)`
  flex-direction: column;
`

const LandingImg = styled.img`
  margin: 15px 0 0 15px;
  min-width: 1305px;
  height: auto;

  @media ${SCREEN.xl} {
    min-width: 1022px;
  }

  @media screen and (max-width: 992px) {
    min-width: 783px;
  }
  
  @media ${SCREEN.sm} {
    min-width: 500px;
    margin: 32px 0 0 -10px;
  }
`
const LandingTitle = styled(Title)`
  margin: 66px auto 0;
  @media ${SCREEN.sm} {
    margin: 54px auto 0;
  }
`

const LandingSubtitle = styled(Subtitle)`
  margin: 24px auto 0;
  @media ${SCREEN.sm} {
    margin: 14px auto 0;
  }
`

const LandingButton = styled(Button)`
  margin: 50px auto 0;
  @media ${SCREEN.sm} {
    margin: 32px auto 0;
  }
`

export default Landing;