import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { withStyles } from "material-ui/styles";
import Card, { CarActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    maxWidth: 376,
    minWidth: 200,
    margin: "1rem"
  },
  media: {
    height: 200
  },
  link: {
    color: "#000",
    cursoer: "pointer"
  }
};

const SpeciesCard = ({ classes, species }) => {
  return (
    <Link to={`/species/${species.id}`} >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={species.image}
          title={species.name}
        />
        <CardContent>
          <Typography variant="subheading" component="h4" align="center">
            {species.name.toUpperCase()}
          </Typography>
          <Typography component="p">{species.description}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

SpeciesCard.propTypes = {
  classes: PropTypes.object.isRequired,
  species: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeciesCard);