import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import TableToolbar from "./TableToolbar";
import ResultTable from "./ResultTable";
import LoadingSpinner from "./LoadingSpinner";

const styles = {
  root: {
    textAlign: "center"
  },
  message: {
    color: "red",
    fontWeight: "bold"
  }
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

const ResultMessage = ({ names = [], className }) => {
  const nameString = names.join(" or ").toUpperCase();
  return (
    <Grid container justify="center" >
      <Grid item sm={8}>
        {names.length === 0 ? (
          <Typography variant="display2">
            Sorry, this may be not an invasive species.
          </Typography>
        ) : (
          <Typography variant="display2" className={className} >
             Invasive species {nameString} found.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const InfoTable = ({ propertyNames = [], entries = [] }) => {
  if (entries.length === 0) return <div />;
  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <TableToolbar title="Result" />
        <ResultTable names={propertyNames} items={entries} />
      </Grid>
    </Grid>
  );
};

const ResultModule = ({ classes, result }) => {
  if (result.loading) {
    return <LoadingSpinner />;
  } else if (!result.entity || result.error) {
    return <div />;
  }


  const { candidates, info } = result.entity;
  const propertyNames = candidates.length === 0 ? [] : Object.keys(candidates[0]);
  const speciesNames = candidates.map(item => item.name);

  return (
    <div className={classes.root}>
      <ResultMessage names={speciesNames} className={classes.message}/>
      <InfoTable propertyNames={propertyNames} entries={candidates} />
    </div>
  );
};

ResultModule.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ResultModule);
