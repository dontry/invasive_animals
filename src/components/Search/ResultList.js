import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../common/Text";
import Entry from "../Info/Entry";

const ResultListWrapper = styled.div`
  padding: 0 0.5rem 1rem;
`;

const ResultList = ({ results }) => {
  return (
    <ResultListWrapper>
      {results && results.map(item => <Entry species={item} />)}
    </ResultListWrapper>
  );
};

ResultList.propTypes = {
    results: PropTypes.array.isRequired
}

ResultList.defaultTypes = {
    results: []
}

export default ResultList;
