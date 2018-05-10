import React from "react";
import styled from "styled-components";
import { grey } from "material-ui/colors";

import { Paragraph, Title } from "../common/Text";
import { addLineBreaker } from "../../utils/tools";

const Wrapper = styled.div`
  padding: ${props => props.padding || "0.5rem 0"};
`;

const Passage = ({ title = "", content }) => {
  content = addLineBreaker(content);
  return (
    <Wrapper>
      {title && (
        <Title
          variant="title"
          txtColor={grey[800]}
          padding="1rem 0 0"
          align="left"
        >
          {title}
        </Title>
      )}
      <Paragraph
        txtSize="1.1em"
        txtColor={grey[600]}
        lineHeight="1.2em"
        padding="1rem 0 0.5rem"
      >
        {content}
      </Paragraph>
    </Wrapper>
  );
};

export default Passage;
