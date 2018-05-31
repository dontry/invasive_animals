import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {grey} from "material-ui/colors";
import Paper from "material-ui/Paper";
import Passage from "../common/Passage";
import {Title} from "../common/Text";
import { addLineBreaker } from "../../utils/tools";


const PaperWrapper = styled(Paper)`
    &&{
        padding: 2rem 1rem 1rem 1rem;
        margin-bottom: 1rem;
    }
`

const LocationInfo = ({info}) => (
    <PaperWrapper>
        <Title variant="headline"  text_color={grey[600]}>{info.Name}</Title>
        <Passage  content={addLineBreaker( info.Description)} />
        <Passage title="Contact" content={addLineBreaker(info.Contact)} />
    </PaperWrapper>
)

LocationInfo.propTypes = {
    info: PropTypes.shape({
        Name: PropTypes.string,
        Description: PropTypes.string,
        Contact: PropTypes.string
    }).isRequired
}

export default LocationInfo;
