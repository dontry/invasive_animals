import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";

import TableToolbar from "./common/TableToolbar";
import ResultTable from "./ResultTable";
import LoadingSpinner from "./common/LoadingSpinner";

const styles = {
  root: {
    textAlign: "center"
  },
  warning: {
    color: "red",
    fontWeight: "bold"
  },
  infoTable: {
    margin: "1rem 0"
  }
};

const ResultMessage = ({ names = [], className }) => {
  const nameString = names.join(" or ").toUpperCase();
  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        {names.length === 0 ? (
          <Typography variant="display1">
            Sorry, this may be not an i96Gnvasive species.
          </Typography>
        ) : (
          <Typography variant="display1" className={className}>
            Invasive species {nameString} found.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

const InfoTable = ({ propertyNames = [], entries = [], className }) => {
  if (entries.length === 0) return <div />;
  return (
    <div className={className}>
      <TableToolbar title="Result" />
      <ResultTable names={propertyNames} items={entries} />
    </div>
  );
};

const ReportButton = () => (
  <Link to="/getinvolved/report">
    <Button variant="raised">Report</Button>
  </Link>
);

const ResultModule = ({ classes, result }) => {
  if (result.loading) {
    return <LoadingSpinner />;
  } else if (!result.entity || result.error) {
    return <div />;
  }

  const { candidates  } = result.entity;
  const propertyNames =
    candidates.length === 0 ? [] : Object.keys(candidates[0]).filter(name => name !== "pic");
  const speciesNames = candidates.map(item => item.name);
  const candidatesInfo = candidates.map(item => {
    const { pic, ...rest } = item;
    return rest;
  });

  return (
    <div className={classes.root}>
      <ResultMessage names={speciesNames} className={classes.warning} />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item sm={8}>
          <InfoTable
            propertyNames={propertyNames}
            entries={candidatesInfo}
            className={classes.infoTable}
          />
          {candidates.length > 0 && <ReportButton />}
        </Grid>
      </Grid>
    </div>
  );
};

ResultModule.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ResultModule);
