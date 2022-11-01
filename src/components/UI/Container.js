import React from 'react';
import styled from "styled-components";
import {SCREEN} from "../../assets/styles/vars/Media";

const Container = (props) => {
    return <Root {...props}/>;
};

const Root = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 100px;
  padding-right: 100px;
  
  @media ${SCREEN.xl}{
    padding-left: 50px;
    padding-right: 50px;
  }

  @media ${SCREEN.md} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${SCREEN.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default Container;