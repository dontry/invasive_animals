import React from "react";
import styled from "styled-components";

import {MenuItem} from "material-ui/Menu";
import Select from "material-ui/Select";

const StyledSelect = styled(Select)`
  width: 200px;
`;

function renderMenuItems(items) {
  return items.map(item => (
    <MenuItem value={item.name || item}>{item.value || item}</MenuItem>
  ));
}

const SelectionField = ({ options, handleChange, value }) => {
  const menuItems = renderMenuItems(options);
  return (
    <StyledSelect value={value} onChange={handleChange}>
      {menuItems}
    </StyledSelect>
  );
};

export default SelectionField;
