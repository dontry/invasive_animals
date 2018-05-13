import React from "react";
import PropTypes from "prop-types";
import MUISearchBar from "material-ui-search-bar";

const style = { 
  maxWidth: 800,
  margin: "0 auto" 
};

const SearchBar = ({ handleChange, handleSearch }) => {
  return (
    <MUISearchBar
      onChange={handleChange}
      onRequestSearch={handleSearch}
      style={style}
    />
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
