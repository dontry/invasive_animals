import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    height: ${props => props.height || "none"};
    min-height: ${props => props.minHeight || "calc(100% - 80px)"};
    width: ${props => props.width || "100vw"};
    background-color: ${props => props.bgColor || "none"};
    /* &:after {
        content: "";
        display: block;
        height: 80px;
    } */
`   

export default PageContainer;
