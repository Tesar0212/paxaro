import React from 'react';
import styled from "styled-components";

const Flex = (props) => {
    return <Root {...props}/>;
};

const Root = styled.div `
  display: flex;
`

export default Flex;