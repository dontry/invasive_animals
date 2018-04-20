import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title, Paragraph } from "../common/Text";

const StyledTitle = styled(Title)``;
const StyledContent = styled(Paragraph)``;
const SectionWrapper = styled.section`
  padding: 1rem;
`;

const Section = ({ data }) => {
  return (
    <SectionWrapper>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledContent>{data.content}</StyledContent>
    </SectionWrapper>
  );
};

Section.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })
};

Section.defaultProps = {
  data: {
    title: "Title",
    content: "Content"
  }
};

export default Section;
