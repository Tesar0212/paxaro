import styled, {css} from "styled-components";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

export const StyledInput = styled.input`
  height: fit-content;
  outline: none;
  border: none;
  border-bottom: 2px solid ${COLORS.other_light_green};
  ${TYPOGRAFY.body_1}
  color: ${props => props.color || `${COLORS.black_bg}`};
  background: ${props => props.background || "transparent"};
  padding: ${props => props.padding || "5px 12px 8px"};
  cursor: pointer;
  transition: 0.25s;
  width: 100%;

  ${props => props.$submit && css`
    ${TYPOGRAFY.subtitle_1}
    color: ${COLORS.light_text};
    background: ${COLORS.green_gradient_card};
    border-radius: 16px;
    max-width: fit-content;
    padding: 25px 28px;
    border: none;

    &:hover {
      box-shadow: 0 14px 30px -10px rgba(27, 157, 120, 0.42);
    }

    @media ${SCREEN.sm} {
      padding: ${props => props.padding || "14px 28px"};
      ${TYPOGRAFY.caption_2}
    }
  `}

`