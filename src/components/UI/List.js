import React from 'react';
import styled from "styled-components";

const List = (props) => {
    return <Root {...props}/>;
};

const Root = styled.ul`
  display: flex;
  position: relative;
`

export default List;