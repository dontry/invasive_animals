import React from 'react';
import styled from "styled-components";

const PageWrapper = styled.div`
    height: ${props => props.height || "100%"};
    min-height: ${props => props.minHeight || "none"};
    background-color: ${props => props.bgColor || "none"};
`

export default PageWrapper;
