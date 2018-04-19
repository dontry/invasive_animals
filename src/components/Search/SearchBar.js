import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MUISearchBar from "material-ui-search-bar";
import { ActionButton } from "../common/ActionButtonGroup";

const StyledSearchBar = styled(MUISearchBar)`
  && {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    height: 1rem;
  }
`;

const SearchBar = ({ handleChange, handleSearch }) => {
  return (
    <StyledSearchBar onChange={handleChange} onRequestSearch={handleSearch} />
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  handleChange() {
    console.debug("search bar on change");
  },
  handleSearch() {
    console.debug("search");
  }
};

export default SearchBar;
