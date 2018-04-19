import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MUISearchBar from "material-ui-search-bar";
import Grid from "material-ui/Grid";
import { ActionButton } from "../common/ActionButtonGroup";

const StyledSearchBar = styled(MUISearchBar)`
  && {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    height: 1rem;
  }
`;

const SearchBar = ({ handleChange, handleSearch }) => {
  return (
    <Grid item xs={8}>
      <StyledSearchBar onChange={handleChange} onRequestSearch={handleSearch} />
    </Grid>
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
