import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { grey} from "material-ui/colors";
import { Title } from "../common/Text";

const ListWrapper = styled(List)`
  border: 1px solid ${grey[300]};
  background-color: ${grey[100]};
`;

const StyledTitle = Title.extend`
  && {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    &:hover {
      color: ${grey[900]};
    }
  }
`;

const ListTitle = Title.extend`
  padding: 1rem;
`;

function renderListItem(items, handleClick) {
  return items.map(item => (
    <ListItem button key={item.value} onClick={handleClick}>
      <ListItemText
        primary={item.name}
        style={{ textAlign: "center", fontWeight: "bolder" }}
      />
      <Divider />
    </ListItem>
  ));
}

const SidePane = ({ list, handleClick }) => {
  const listItems = renderListItem(list.children, handleClick);
  return (
    <Fragment>
      <Link to="/species">
        <StyledTitle variant="title">Species Wiki</StyledTitle>
      </Link>
      <ListWrapper>
        <ListTitle variant="title" align="center">
          {list.name}
        </ListTitle>
        <Divider />
        {listItems}
      </ListWrapper>
    </Fragment>
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
        name: "Animal",
        value: "Animal"
      },
      {
        name: "Fish",
        value: "Fish"
      },
      {
        name: "Plant",
        value: "Plant"
      }
    ]
  },
  handlClick(evt) {
    console.log(`Item on Sidepane clicked ${evt.target}`);
  }
};

export default SidePane;
