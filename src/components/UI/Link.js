import React from 'react';
import styled, {css} from "styled-components";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";
import {COLORS} from "../../assets/styles/vars/Colors";

const Link = (props) => {
    return <Root {...props}/>;
};

const Root = styled.a`
  ${TYPOGRAFY.caption_2}
  color: ${props => props.color || `${COLORS.light_text}`};
  transition: .25s;
  cursor: pointer;
  &:hover {
    color: ${props => props.color_hover || `${COLORS.green_line}`};
  }

  ${props => props.$large && css`
    ${TYPOGRAFY.caption_1}
  `}

  ${props => props.$large_sm && css`
    ${TYPOGRAFY.subtitle_1}
  `}
`

export default Link;