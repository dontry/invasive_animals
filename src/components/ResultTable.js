import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  }
});

const RefLink = link => <a href={link}>{link}</a>;

const createTableHead = names => {
  const row = names.map(name => <TableCell key={name}>{name}</TableCell>);
  return <TableRow>{row}</TableRow>;
};
const createTableBody = items => {
  return items.map((item, idx) => {
    const children = createTableRow(item);
    return <TableRow key={`${item.mid} ${idx}`}>{children}</TableRow>;
  });
};

const createTableRow = item => {
  const keys = Object.keys(item);
  return keys.map(key => {
    const content = item[key].includes("://") ? RefLink(item[key]) : item[key];
    return <TableCell key={key}>{content}</TableCell>;
  });
};

const ResultTable = ({ classes, items, names }) => {
  const Head = createTableHead(names);
  const Body = createTableBody(items);
  return (
    <Table className={classes.root}>
      <TableHead>{Head}</TableHead>
      <TableBody>{Body}</TableBody>
    </Table>
  );
};

ResultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired
};

ResultTable.defaultProps = {
  names: [],
  items: []
};

export default withStyles(styles)(ResultTable);
