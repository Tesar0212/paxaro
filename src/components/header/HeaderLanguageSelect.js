import React, {useRef, useState} from 'react';
import styled, {css} from "styled-components";
import RusIcon from '../../assets/images/russia.svg'
import EngIcon from '../../assets/images/united-states.svg'
import KzhIcon from '../../assets/images/kazakhstan.svg'
import TurIcon from '../../assets/images/turkey.svg'
import ChnIcon from '../../assets/images/china.svg'
import IndIcon from '../../assets/images/indonesia.svg'
import Flex from "../UI/Flex";
import List from "../UI/List";
import ListItem from "../UI/ListItem";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";


const HeaderLanguageSelect = (props) => {

    const [showOptions, setShowOptions] = useState(true)

    const [Option, setOptions] = useState({
        title: 'Русский',
        value: 'RUS',
        abbreviation: 'Ru',
        img: RusIcon
    })

    const selectBtn = useRef()

    const Languages =[
        {id: 1, title: 'Русскиий', value: 'RUS', abbreviation: 'Ru', img: RusIcon},
        {id: 2, title: 'English', value: 'ENG', abbreviation: 'En', img: EngIcon},
        {id: 3, title: 'Қазақстан', value: 'KZH', abbreviation: 'Kz', img: KzhIcon},
        {id: 4, title: 'Türkiye', value: 'TUR', abbreviation: 'Tr', img: TurIcon},
        {id: 5, title: '中国', value: 'CHN', abbreviation: 'Cn', img: ChnIcon},
        {id: 6, title: 'Indonesia', value: 'IDN', abbreviation: 'Id', img: IndIcon},
    ]

    const showSelectOptions = () => {
        setShowOptions(!showOptions)
    }

    const getSelectOption = (e) => {
        let name = e.target.dataset.name
        let value = e.target.dataset.value
        let abbr = e.target.dataset.abbr
        let img = e.target.childNodes[0].src
        setOptions({...Option, title: name, value: value, abbreviation: abbr, img: img})
        showSelectOptions()
    }

    return (
        <LanguageInputContainer {...props}>
            <LanguageInputBtn {...props} show={showOptions} ref={selectBtn} onClick={showSelectOptions}>{ props.mobile ? <LanguageInputOptionImg mobile src={Option.img}/> : ''}{ props.mobile ? `${Option.title}` : `${Option.abbreviation }`}</LanguageInputBtn>
            <LanguageInputOptions {...props} show={showOptions}>
                {Languages.map(language =>
                    <LanguageInputOption {...props} key={language.id} onClick={getSelectOption} data-value={language.value}
                                         data-name={language.title} data-abbr={language.abbreviation}>
                        <LanguageInputOptionImg mobile src={language.img}></LanguageInputOptionImg>
                        {language.title}
                    </LanguageInputOption>
                )}
            </LanguageInputOptions>
        </LanguageInputContainer>
    );
};

const LanguageInputContainer = styled(Flex)`
  background: transparent;
  position: relative;
  max-width: fit-content;
  ${props => props.mobile && css`
    @media ${SCREEN.lg} {
      min-width: 100%;
    }
  `}
`

const LanguageInputBtn = styled.button`
  padding: 12px 13px;
  background: ${COLORS.light_bg};
  border-radius: 8px;
  cursor: pointer;
  max-width: fit-content;
  z-index: 10;
  min-width: 45px;
  text-align: center;
  ${TYPOGRAFY.caption_2}
  color: ${COLORS.black_bg};

  ${props => props.mobile && css`
    @media ${SCREEN.lg} {
      max-width: unset;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
      ${TYPOGRAFY.body_1}
      border-radius: unset;
      background: ${({show}) => (!show ? '#1D1D1D' : 'transparent')};
      color: ${COLORS.light_bg};
      padding: 20px 50px 28px 50px;
    }

    @media ${SCREEN.md} {
      padding: 20px 30px 28px 30px;
    }
    
    @media ${SCREEN.sm} {
      padding: 20px 20px 28px 20px;
    }
  `}
`

const LanguageInputOptions = styled(List)`
  visibility: ${({show}) => (show ? 'hidden' : 'visible')};
  opacity: ${({show}) => (show ? '0' : '1')};
  position: absolute;
  right: 0;
  top: 55px;
  flex-direction: column;
  background: ${COLORS.light_bg};
  box-shadow: 0px 6px 23px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 7px 13px;
  z-index: 11;

  ${props => props.mobile && css`
    @media ${SCREEN.lg} {
      top: 1px;
      transform: translateY(-100%);
      width: 100%;
      background: ${COLORS.dark_bg};
      border-radius: 30px 30px 0px 0px;
      padding: 20px 0 0;

      &:after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background: rgba(153, 153, 153, 0.3);
        z-index: 10;
      }
    }
  `}
`

const LanguageInputOption = styled(ListItem)`
  min-width: 133px;
  display: flex;
  gap: 8px;
  ${TYPOGRAFY.caption_2}
  text-align: center;
  color: ${COLORS.dark_text};
  cursor: pointer;
  transition: 0.25s;
  position: relative;
  padding: 6px 0;

  ${props => props.mobile && css`
    @media ${SCREEN.lg} {
      color: ${COLORS.light_text};
      padding: 10px 50px 10px 50px;
      gap: 14px;
      ${TYPOGRAFY.body_1}
    }

    @media ${SCREEN.md} {
      padding: 10px 30px 10px 30px;
    }
    
    @media ${SCREEN.sm} {
      padding: 10px 20px 10px 20px;
    }
  `}
  
  &:after {
    opacity: 0;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${COLORS.green_line};
    height: 1px;
    width: 100%;
    transition: .25s;
    ${props => props.mobile && css`
      @media ${SCREEN.lg} {
        display: none;
      }
    `}
  }

  &:hover,
  &:active,
  &:focus {
    ${props => props.mobile && css`
      @media ${SCREEN.lg} {
        background: rgba(153, 153, 153, 0.1);
      }
    `}
    &:after {
      opacity: 1;
    }
  }
`

const LanguageInputOptionImg = styled.img`
  ${props => props.mobile && css`
    @media ${SCREEN.lg} {
      width: 24px;
      height: 24px;
    }
  `}
`

export default HeaderLanguageSelect;