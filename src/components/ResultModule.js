import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import TableToolbar from "./TableToolbar";
import ResultTable from "./ResultTable";

const styles = {
  root: {}
};

const items = [
  {
    mid: "/m/0bt9lr",
    description: "dog",
    score: 0.97346616
  },
  {
    mid: "/m/09686",
    description: "vertebrate",
    score: 0.85700572
  },
  {
    mid: "/m/01pm38",
    description: "clumber spaniel",
    score: 0.84881884
  },
  {
    mid: "/m/04rky",
    description: "mammal",
    score: 0.847575
  },
  {
    mid: "/m/02wbgd",
    description: "english cocker spaniel",
    score: 0.75829375
  }
];

const ResultModule = ({ classes }) => {
  const names = Object.keys(items[0]);
  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <TableToolbar title="Result" />
        <ResultTable names={names} items={items} />
      </Grid>
    </Grid>
  );
};

ResultModule.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ResultModule);
