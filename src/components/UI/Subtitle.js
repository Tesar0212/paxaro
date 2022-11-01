import styled, {css} from "styled-components";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

export const Subtitle = styled.h3`
  text-align: center;
  color: ${COLORS.dark_bg};

  ${props => props.$subtitle_1 && css`
    ${TYPOGRAFY.subtitle_1}
    @media ${SCREEN.sm} {
    ${TYPOGRAFY.subtitle_3}
  }
  `}

  ${props => props.$subtitle_2 && css`
    ${TYPOGRAFY.subtitle_2}
    @media ${SCREEN.sm} {
    ${TYPOGRAFY.body_2}
  }
  `}

  ${props => props.$subtitle_3 && css`
    ${TYPOGRAFY.subtitle_3}
  `}
`