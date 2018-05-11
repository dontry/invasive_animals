import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Title} from "../common/Text";
import Entry from "../Info/Entry";

const ResultListWrapper = styled.div`
  padding: 0 0.5rem 1rem;
`;

const ResultList = ({ results }) => {
  if (results.length === 0) {
    return (
      <Fragment>
        <Title variant="title" text_color="#666">
          Sorry, no matched result found.
        </Title>
        <Title variant="title" text_color="#666">
          Can you have another try?
        </Title>
      </Fragment>
    );
  }
  return (
    <ResultListWrapper>
      {results &&
        results.map((item, index) => (
          <Entry key={`results-${index}`} species={item} />
        ))}
    </ResultListWrapper>
  );
};

ResultList.propTypes = {
  results: PropTypes.array.isRequired
};

ResultList.defaultTypes = {
  results: []
};

export default ResultList;
