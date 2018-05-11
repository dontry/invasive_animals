import React from "react";
import styled from "styled-components";

import {grey} from "material-ui/colors";
import Paper from "material-ui/Paper";
import Passage from "../common/Passage";
import {Title} from "../common/Text";


const PaperWrapper = styled(Paper)`
    &&{
        padding: 2rem 1rem 1rem 1rem;
        margin-bottom: 1rem;
    }
`

const LocationInfo = ({info}) => (
    <PaperWrapper>
        <Title variant="headline"  text_color={grey[600]}>{info.Name}</Title>
        <Passage  content={info.Description} />
        <Passage title="Contact" content={info.Contact} />
    </PaperWrapper>
)

export default LocationInfo;
