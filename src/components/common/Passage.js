import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { grey } from "material-ui/colors";

import { Paragraph, Title } from "../common/Text";

const Wrapper = styled.div`
  padding: ${props => props.padding || "0.5rem 0"};
`;

const Passage = ({ title = "", content }) => {
  return (
    <Wrapper>
      {title && (
        <Title
          variant="title"
          text_color={grey[800]}
          padding="1rem 0 0"
          align="left"
        >
          {title}
        </Title>
      )}
      <Paragraph
        font_size="1.1em"
        text_color={grey[600]}
        line_height="1.2em"
        padding="1rem 0 0.5rem"
      >
        {content}
      </Paragraph>
    </Wrapper>
  );
};

Passage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Passage;
