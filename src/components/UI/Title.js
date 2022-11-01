import styled, {css} from "styled-components";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";

export const Title = styled.h2`
  text-align: center;
  color: ${COLORS.dark_bg};

  ${props => props.$title_1 && css`
     ${TYPOGRAFY.title_1}
    @media ${SCREEN.sm} {
      ${TYPOGRAFY.subtitle_1}
    }
  `}

  ${props => props.$title_2 && css`
     ${TYPOGRAFY.title_2}
    @media ${SCREEN.sm} {
      ${TYPOGRAFY.subtitle_1}
    }
  `}

  ${props => props.$title_3 && css`
     ${TYPOGRAFY.title_3}
    @media ${SCREEN.sm} {
      ${TYPOGRAFY.subtitle_1}
    }
  `}
`
