import React from 'react';
import styled from "styled-components";
import ListItem from "../UI/ListItem";
import Flex from "../UI/Flex";
import {Title} from "../UI/Title";
import {Button} from "../UI/Button";
import List from "../UI/List";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

const OffersPost = (props) => {
    return (
        <OffersItem>
            <OffersItemHeader>
                <OffersItemHeaderLeft>
                    <OffersName $title_1>{props.post.title}</OffersName>
                </OffersItemHeaderLeft>
                <OffersItemHeaderRight >
                    <OffersPrice $title_1>${props.post.price}</OffersPrice>
                    <OffersBuy>Купить</OffersBuy>
                </OffersItemHeaderRight>
            </OffersItemHeader>
            <OffersItemContent>
                <OffersAdvantagesList>
                    {props.post.characteristics.map(characteristic =>
                        <OffersAdvantagesItem characteristic={characteristic} key={characteristic.id}>{characteristic.name}</OffersAdvantagesItem>
                    )}
                </OffersAdvantagesList>
            </OffersItemContent>
        </OffersItem>
    );
};

const OffersItem = styled(ListItem)``

const OffersItemHeader = styled(Flex)`
  padding-bottom: 7px;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
  column-gap: 30px;
  @media ${SCREEN.sm} {
    flex-direction: column;
    padding-bottom: 5px;
  }
`

const OffersItemHeaderLeft = styled(Flex)``

const OffersName = styled(Title)`
  font-size: 72px;
  @media ${SCREEN.lg}{
    ${TYPOGRAFY.title_3}
  }
  @media ${SCREEN.md}{
    ${TYPOGRAFY.title_3}
  }
  @media ${SCREEN.sm}{
    ${TYPOGRAFY.title_3}
  }
`

const OffersItemHeaderRight = styled(Flex)`
  gap: 56px;
  align-items: center;
  
  @media ${SCREEN.lg}{
    gap: 24px;
  }
  
  @media ${SCREEN.sm} {
    justify-content: space-between;
    width: 100%;
  }
`

const OffersPrice = styled(Title)`
  font-size: 72px;
  @media ${SCREEN.lg}{
    ${TYPOGRAFY.title_3}
  }
  @media ${SCREEN.md}{
    ${TYPOGRAFY.title_3}
  }
  @media ${SCREEN.sm}{
    ${TYPOGRAFY.title_3}
  }
`

const OffersBuy = styled(Button)`
  @media ${SCREEN.lg}{
    padding: 14px 28px;
    border-radius: 8px;
  }
  
`

const OffersItemContent = styled(Flex)`
  padding-top: 40px;
  position: relative;
  row-gap: 18px;
  column-gap: 20px;
  @media ${SCREEN.sm} {
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: ${COLORS.dark_bg};
    width: 100%;
    height: 1px;
    opacity: 0.3;
    border-radius: 10px;
  }
`

const OffersAdvantagesList = styled(List)`
  column-gap: 20px;
  row-gap: 30px;
  list-style: none;
  columns: 2;
  display: block;
  width: 100%;

  @media ${SCREEN.md} {
    flex-direction: column;
    display: flex;
    margin-top: 0;
  }
  
  @media ${SCREEN.sm} {
    row-gap: 18px;
  }
`

const OffersAdvantagesItem = styled(ListItem)`
  padding-left: 42px;
  position: relative;
  ${TYPOGRAFY.subtitle_1}
  color: ${COLORS.dark_gray_text};
  break-inside: avoid;
  margin-top: 30px;
  overflow: hidden;
  max-width: 380px;
  

  &:before, &:after {
    content: '';
    position: absolute;
    border-radius: 100%;
  }

  &:after {
    background: ${COLORS.green_line};
    width: 24px;
    height: 24px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  &:before {
    width: 20px;
    height: 20px;
    border: 1px solid ${COLORS.light_text};
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  
  &:first-child{
    margin-top: 0;
  }

  @media ${SCREEN.md} {
    margin-top: 0;
  }

  @media ${SCREEN.sm} {
    ${TYPOGRAFY.caption_1}
    padding-left: 34px;

    &:after {
      background: ${COLORS.green_line};
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }

    &:before {
      width: 18px;
      height: 18px;
      left: 1px;
      top: 50%;
    }
  }
`

export default OffersPost;