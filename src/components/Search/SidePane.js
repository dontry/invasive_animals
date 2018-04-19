import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Tooltip from "material-ui/Tooltip";
import { grey } from "material-ui/colors";
import Typography from "material-ui/Typography";

const ListWrapper = styled(List)`
  border: 1px solid ${grey[300]};
  background-color: ${grey[100]};
`;

const ListTitle = styled(Typography)`
  padding: 1rem;
`

function renderListItem(items, handleClick) {
  return items.map(item => (
    <ListItem button key={item.name} onClick={handleClick}>
      <ListItemText primary={item.name} />
    </ListItem>
  ));
}

const SidePane = ({ list, handleClick }) => {
  const listItems = renderListItem(list.children, handleClick);
  return (
    <ListWrapper>
      <ListTitle variant="title" align="center">{list.name}</ListTitle>
      <Divider />
      {listItems}
    </ListWrapper>
  );
};

SidePane.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array
  }).isRequired,
  handleClick: PropTypes.func
};

SidePane.defaultProps = {
  list: {
    name: "Popular search",
    children: [
      {
        name: "Most harmful invasive species",
        value: "MOST_HARMFUL_SPECIES"
      },
      {
        name: "Invasive species in Victoria",
        value: "VICTORIA_INVASIVE_SPECIES"
      }
    ]
  },
  handlClick(evt) {
    console.log(`Item on Sidepane clicked ${evt.target}`);
  }
};

export default SidePane;
