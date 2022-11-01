import React from 'react';
import styled from "styled-components";
import {COLORS} from "../../assets/styles/vars/Colors";
import {SCREEN} from "../../assets/styles/vars/Media";
import {TYPOGRAFY} from "../../assets/styles/vars/Typografy";


const SectionTitle = (props) => {
    return <Root {...props}/>;
};

const Root = styled.h1`
  ${TYPOGRAFY.caption_1}
  color: ${COLORS.dark_bg};
  background: ${COLORS.light_card};
  padding: 3px 13px;
  max-width: fit-content;
  margin: 0 auto;
  @media ${SCREEN.sm} {
    ${TYPOGRAFY.caption_3}
  }
`

export default SectionTitle;
