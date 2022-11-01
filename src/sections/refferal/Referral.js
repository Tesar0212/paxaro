import React, {useRef, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";
import Container from "../../components/UI/Container";
import SectionTitle from "../../components/UI/SectionTitle";
import {Title} from "../../components/UI/Title";
import {Subtitle} from "../../components/UI/Subtitle";
import Flex from "../../components/UI/Flex";
import List from "../../components/UI/List";
import ListItem from "../../components/UI/ListItem";
import Link from "../../components/UI/Link";
import PhoneImg from "../../assets/images/phone.png";
import LogoImg from "../../assets/images/logo.svg";
import GooglePlayImg from "../../assets/images/google-play.svg";
import AppStoreImg from "../../assets/images/app-store.svg";

const Referral = () => {

    const rangeRef = useRef()
    const selectValueRef = useRef()
    const [Friends, setFriends] = useState({
        left : '0%',
        value : '1',
        translate : '0px'
    })
    const [Subscribe, setSubscribe] = useState('1')
    const [SumSubscribe, setSumSubscribe] = useState(1)

    useEffect(() => {
        selectValueRef.current.innerText = rangeRef.current.value
        calcSum(Friends.value, Subscribe)
    }, [])

    const changeRange = (e) => {
        const max = rangeRef.current.max - 1
        let current = rangeRef.current.value - 1
        const oneStep = 100 / max
        const oneTranslateStep = 24 / max
        let currentStep = current * oneStep + '%'
        let currentTranslate = "-" + current * oneTranslateStep + 'px'
        selectValueRef.current.innerText = current + 1
        setFriends({...Friends, left: currentStep, value: e.target.value, translate: currentTranslate})
        calcSum(e.target.value, Subscribe)
    }

    const changeSubscribe = (e) => {
        setSubscribe(e.target.value)
        calcSum(Friends.value, e.target.value)
    }

    const calcSum = (countFriends, currSubscribe) => {
        let sum = 292 * currSubscribe * countFriends
        setSumSubscribe(sum)
    }

    return (
        <Section>
            <Container>
                <SectionTitle>Партнерская программа</SectionTitle>
                <ReferralTitle $title_2 >Приглашайте друзей и получайте бонусы</ReferralTitle>
                <ReferralSubtitle>
                    Всего есть 5 реферальных уровней — вы получаете процент с каждого <br/>
                    приведенного друга, а также с их друзей. Размер вознаграждения зависит от вашего плана подписки <br/>
                    и количества приглашенных пользователей.
                </ReferralSubtitle>
                <ReferralSubtitleMob >
                    Прибыль зависит от вашего плана подписки <br/>
                    и количества приглашенных друзей.
                </ReferralSubtitleMob>
                <ReferralControl>
                    <ReferralControlList>
                        <ReferralControlItem>
                            <ReferralControlTitle $subtitle_1>Ваш план подписки</ReferralControlTitle>
                            <ReferralControlInputGroup>
                                <ReferralControlInputContainer>
                                    <ReferralControlInput onChange={changeSubscribe} name="subscription" value="1" type="radio" id="referral-radio-prime" checked={Subscribe === "1"}></ReferralControlInput>
                                    <ReferralControlCustomInput htmlFor="referral-radio-prime"></ReferralControlCustomInput>
                                    <ReferralControlLabel>Prime</ReferralControlLabel>
                                </ReferralControlInputContainer>
                                <ReferralControlInputContainer>
                                    <ReferralControlInput onChange={changeSubscribe} name="subscription" value="2" type="radio" id="referral-radio-advanced" checked={Subscribe === "2"}></ReferralControlInput>
                                    <ReferralControlCustomInput htmlFor="referral-radio-advanced"></ReferralControlCustomInput>
                                    <ReferralControlLabel>Advanced</ReferralControlLabel>
                                </ReferralControlInputContainer>
                            </ReferralControlInputGroup>
                        </ReferralControlItem>
                        <ReferralControlItem>
                            <ReferralControlTitle $subtitle_1>Количество друзей</ReferralControlTitle>
                            <ReferralControlRange>
                                <ReferralControlRangeContainer>
                                    <ReferralControlRangeMin>1</ReferralControlRangeMin>
                                    <ReferralControlRangeInputContainer>
                                        <ReferralControlRangeInput onChange={changeRange} style={{backgroundSize : Friends.left}} ref={rangeRef} type="range" min="1" max="5" step="1" value={Friends.value}></ReferralControlRangeInput>
                                        <ReferralControlRangeSelector style={{left : Friends.left , transform: `translateX(${Friends.translate})`}}>
                                            <ReferralControlRangeSelectBtn></ReferralControlRangeSelectBtn>
                                            <ReferralControlRangeSelectValue ref={selectValueRef} ></ReferralControlRangeSelectValue>
                                        </ReferralControlRangeSelector>
                                    </ReferralControlRangeInputContainer>
                                    <ReferralControlRangeMax>5</ReferralControlRangeMax>
                                </ReferralControlRangeContainer>
                            </ReferralControlRange>
                        </ReferralControlItem>
                    </ReferralControlList>
                    <ReferralProfit>
                        <ReferralProfitTitle $subtitle_3 >Ваша прибыль</ReferralProfitTitle>
                        <ReferralProfitList>
                            <ReferralProfitItem>
                                <ReferralProfitItemTitle>Уровни</ReferralProfitItemTitle>
                                <ReferralProfitValues>
                                    <ReferralProfitValuesItem $bordered>1</ReferralProfitValuesItem>
                                    <ReferralProfitValuesItem $bordered>2</ReferralProfitValuesItem>
                                    <ReferralProfitValuesItem $bordered>3</ReferralProfitValuesItem>
                                </ReferralProfitValues>
                            </ReferralProfitItem>
                            <ReferralProfitItem>
                                <ReferralProfitItemTitle>Люди</ReferralProfitItemTitle>
                                <ReferralProfitValues>
                                    <ReferralProfitValuesItem>4</ReferralProfitValuesItem>
                                    <ReferralProfitValuesItem>16</ReferralProfitValuesItem>
                                    <ReferralProfitValuesItem>64</ReferralProfitValuesItem>
                                </ReferralProfitValues>
                            </ReferralProfitItem>
                        </ReferralProfitList>
                    </ReferralProfit>
                    <ReferralInfoList>
                        <ReferralInfoItem>
                            <ReferralInfoName $subtitle_2>Ваш бонус</ReferralInfoName>
                            <ReferralInfoValue $neon>${SumSubscribe}</ReferralInfoValue>
                        </ReferralInfoItem>
                        <ReferralInfoItem >
                            <ReferralInfoName $subtitle_2>Общий бонус</ReferralInfoName>
                            <ReferralInfoValue>$16,4562</ReferralInfoValue>
                        </ReferralInfoItem>
                    </ReferralInfoList>
                </ReferralControl>
                <ReferralList>
                    <ReferralItem $blur>
                        <ReferralPhoneImg src={PhoneImg}></ReferralPhoneImg>
                    </ReferralItem>
                    <ReferralItem >
                        <ReferralLogo src={LogoImg}></ReferralLogo>
                        <ReferralItemSubtitle $subtitle_2>Мобильное приложение</ReferralItemSubtitle>
                        <ReferralLinkContainer >
                            <ReferralLink href='#'>
                                <GooglePlayLogo src={GooglePlayImg}></GooglePlayLogo>
                            </ReferralLink>
                            <ReferralLink href='#'>
                                <AppStoreLogo src={AppStoreImg}></AppStoreLogo>
                            </ReferralLink>
                        </ReferralLinkContainer>
                    </ReferralItem>
                </ReferralList>
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

const ReferralTitle = styled(Title)`
  margin: 15px auto 0;
  @media ${SCREEN.sm} {
    margin-top: 18px;
    max-width: 246px;
  }
`

const ReferralSubtitle = styled.p`
  ${TYPOGRAFY.body_1}
  margin: 18px auto 0;
  display: block;
  text-align: center;
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.body_2}
    margin-top: 24px;
    display: none;
    max-width: 334px;
  }
`

const ReferralSubtitleMob = styled(ReferralSubtitle)`
  display: none;
  @media ${SCREEN.sm} {
    display: block;
  }
`

const ReferralControl = styled(Flex)`
  margin-top: 56px;
  background: ${COLORS.dark_bg};
  border-radius: 50px;
  width: 100%;
  padding: 60px 105px;
  flex-wrap: wrap;
  @media ${SCREEN.sm} {
    margin-top: 40px;
    padding: 40px 20px;
  }
`
const ReferralControlList = styled(List)`
  width: 100%;
  @media ${SCREEN.lg} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`
const ReferralControlItem = styled(ListItem)`
  width: 49%;
  @media ${SCREEN.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media ${SCREEN.sm} {
    align-items: flex-start;
  }
`

const ReferralControlTitle = styled(Subtitle)`
  color: ${COLORS.light_bg};
  text-align: start;
  @media ${SCREEN.lg} {
    text-align: center;
  }
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.subtitle_3}
  }
`

const ReferralControlInputGroup = styled(Flex)`
  margin-top: 36px;
  gap: 98px;
  @media ${SCREEN.sm} {
    margin-top: 19px;
  }
`

const ReferralControlCustomInput = styled.label``

const ReferralControlInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;

  & + ${ReferralControlCustomInput} {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
  }

  & + ${ReferralControlCustomInput}::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid ${COLORS.green_line};
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.2' cx='9.99844' cy='10.0004' r='9.6' fill='white'/%3E%3C/svg%3E%0A");
  }

  &:not(:disabled):not(:checked) + ${ReferralControlCustomInput}:hover::before {
    border-color: ${COLORS.green_line};
  }

  &:focus:not(:checked) + ${ReferralControlCustomInput}::before {
    border-color: ${COLORS.green_line};
  }

  &:checked + ${ReferralControlCustomInput}::before {
    border-color: ${COLORS.green_line};
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.99844' cy='10.0004' r='9.6' fill='url(%23paint0_linear_705_1412)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_705_1412' x1='19.5984' y1='10.1219' x2='0.400462' y2='10.3191' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2345C6A1'/%3E%3Cstop offset='1' stop-color='%23179A74'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E ");
  }
`

const ReferralControlInputContainer = styled(Flex)``

const ReferralControlLabel = styled.label`
  ${TYPOGRAFY.caption_1}
  color: ${COLORS.light_text};
  margin-left: 14px;
  @media ${SCREEN.sm} {
    margin-left: 12px;
  }
`

const ReferralControlRange = styled(Flex)`
  position: relative;
  margin-top: 52px;
  @media ${SCREEN.sm} {
  }
`

const ReferralControlRangeMin = styled.p`
  ${TYPOGRAFY.caption_1}
  color: ${COLORS.light_text};
`

const ReferralControlRangeInput = styled.input`
  width: 297px;
  height: 7px;
  outline: none;
  border-radius: 3px;
  background-color: ${COLORS.gray_line};
  -webkit-appearance: none;
  background-image: ${COLORS.green_gradient_card};
  background-size: 50% 100%;
  background-repeat: no-repeat;
  position: relative;
  @media ${SCREEN.lg} {
    width: 241px;
  }

  &::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    -webkit-appearance: none;
    border-radius: 100%;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }

`

const ReferralControlRangeMax = styled(ReferralControlRangeMin)``

const ReferralControlRangeContainer = styled(Flex)`
  align-items: center;
  gap: 16px;
`

const ReferralControlRangeSelector = styled(Flex)`
  position: absolute;
  flex-direction: column-reverse;
  align-items: center;
  gap: 4px;
  bottom: -8px;
`

const ReferralControlRangeSelectBtn = styled.div`
  width: 24px;
  height: 24px;
  background: ${COLORS.green_gradient_card};
  border: 3px solid ${COLORS.dark_bg};
  border-radius: 100%;
  box-shadow: 0 0 25px 5px rgba(69, 198, 161, 0.22);
  cursor: pointer;
`

const ReferralControlRangeSelectValue = styled(ReferralControlRangeMin)`
  color: ${COLORS.green_line};
`

const ReferralControlRangeInputContainer = styled(Flex)`
  position: relative;
`

const ReferralInfoList = styled(Flex)`
  align-items: center;
  column-gap: 110px;
  row-gap: 40px;
  width: 100%;
  margin-top: 68px;
  @media ${SCREEN.lg} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  @media ${SCREEN.sm} {
    margin-top: 44px;
  }
`

const ReferralInfoItem = styled(Flex)`
  align-items: center;
  gap: 30px;
  @media ${SCREEN.md} {
    gap: 14px;
    @media ${SCREEN.sm} {
      justify-content: space-between;
      width: 100%;
    }
  }

`

const ReferralInfoName = styled(Subtitle)`
  color: ${COLORS.light_text};
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.subtitle_3}
  }
`

const ReferralInfoValue = styled.p`
  ${TYPOGRAFY.title_3}
  color: ${COLORS.light_text};
  position: relative;
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.subtitle_1}
  }


  ${props => props.$neon && css`
    color: ${props => props.color || `${COLORS.green_line}`};
    min-width: 100px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${COLORS.green_line};
      filter: blur(44px);
      top: 0;
      left: 0;
      transform: translateZ(50%);
    }
  `}

`

const ReferralList = styled(Flex)`
  gap: 20px;
  margin-top: 20px;

  @media ${SCREEN.lg} {
    flex-direction: column-reverse;
  }
`

const ReferralItem = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 791px;
  background: ${COLORS.green_gradient_card};
  border-radius: 45px;
  overflow: hidden;
  position: relative;

  @media ${SCREEN.lg} {
    height: 600px;
  }

  @media ${SCREEN.sm} {
    height: 335px;
  }

  ${props => props.$blur && css`
    background: ${COLORS.black_bg};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 60%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 87.61%);
      z-index: 10;
      left: 0;
      bottom: 0;

      @media ${SCREEN.sm} {
        transform: translateY(30px);
      }
    }
  `}

`

const ReferralPhoneImg = styled.img`
  transform: translateY(134px);
  width: 370px;
  height: 748px;

  @media ${SCREEN.lg} {
    width: 296px;
    height: 599px;
    transform: translateY(70px);
  }

  @media ${SCREEN.sm} {
    transform: translateY(90px);
    width: 226px;
    height: 457px;
  }
`

const ReferralLogo = styled.img`
  max-height: 86px;
  max-width: 277px;
  width: 100%;
  height: auto;

  @media ${SCREEN.sm} {
    max-height: 62px;
    max-width: 195px;
  }
`

const ReferralLink = styled(Link)``

const GooglePlayLogo = styled.img`
    transition: .3s;
    &:hover {
      box-shadow: 0px 30px 36px -15px rgba(0, 0, 0, 0.15);
    }
`

const AppStoreLogo = styled.img`
  transition: .3s;
  &:hover {
    box-shadow: 0px 30px 36px -15px rgba(0, 0, 0, 0.15);
  }
`

const ReferralItemSubtitle = styled(Subtitle)`
  color: ${COLORS.light_bg};
  margin-top: 22px;
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.subtitle_3}
    margin-top: 15px;
  }
`

const ReferralLinkContainer = styled(Flex)`
  gap: 20px;
  align-items: center;
  margin-top: 77px;
  @media ${SCREEN.sm} {
    gap: 10px;
    flex-direction: column-reverse;
    margin-top: 33px;
  }
`

const ReferralProfit = styled(Flex)`
  flex-direction: column;
  margin-top: 40px;
  display: none;
  @media ${SCREEN.sm} {
    display: flex;
  }
`

const ReferralProfitTitle = styled(Subtitle)`
  color: ${COLORS.light_bg};
`

const ReferralProfitList = styled(Flex)`
  flex-direction: column;
  margin-top: 24px;
  gap: 15px;
`

const ReferralProfitItem = styled(Flex)`
  align-items: center;
`

const ReferralProfitItemTitle = styled.p`
  width: 65px;
  ${TYPOGRAFY.body_1}
  color: ${COLORS.light_text};
`

const ReferralProfitValues = styled(Flex)`
  margin-left: 25px;
  gap: 15px;
`

const ReferralProfitValuesItem = styled.p`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${TYPOGRAFY.caption_2}
  color: ${COLORS.light_text};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || ""};

  ${props => props.$bordered && css`
    border: 1px solid ${COLORS.green_line};
    border-radius: 7px;
  `}
`

export default Referral;