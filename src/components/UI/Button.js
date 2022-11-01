import styled, {css} from "styled-components";
import {COLORS} from "../../assets/styles/vars/Colors";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {SCREEN} from "../../assets/styles/vars/Media";

export const Button = styled.button`
  max-width: max-content;
  height: fit-content;
  ${TYPOGRAFY.subtitle_1}
  color: ${COLORS.light_text};
  background: ${COLORS.green_gradient_card};
  text-align: ${props => props.align || "stretch"};
  padding: ${props => props.padding || "26px 28px"};
  border-radius: ${props => props.radius || "16px"};
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 14px 30px -10px rgba(27, 157, 120, 0.42);
  }
  
 @media ${SCREEN.sm} {
    padding: ${props => props.padding || "14px 28px"};
    ${TYPOGRAFY.caption_2}
    border-radius: 8px;
  }
  
  ${props => props.$sm && css`
    padding: ${props => props.padding || "14px 28px"};
    
    ${TYPOGRAFY.caption_2}
    border-radius: 8px
  `}

  ${props => props.$login && css`
    ${TYPOGRAFY.caption_2}
    padding: ${props => props.padding || "11px 28px"};
    border-radius: 8px
  `}

  ${props => props.$login_sm && css`
    ${TYPOGRAFY.caption_2}
    padding: ${props => props.padding || "12px 18px"};
    border-radius: 8px;
  `}

  ${props => props.$transparent && css`
    ${TYPOGRAFY.caption_2}
    border: ${props => props.border || "2px solid"};
    border-color: ${props => props.border_color || "#45C6A1"};
    background: ${props => props.background || "transparent"};
    padding: ${props => props.padding || "10px 18px"};
    border-radius: 8px;
  `}
`