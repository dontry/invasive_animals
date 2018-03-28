import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CarActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    maxWidth: 376
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
    <a className={classes.link} href={species.reference} target="_blank" noreferrer>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={species.pic}
          title={species.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headlinew" component="h4">
            {species.name.toUpperCase()}
          </Typography>
          <Typography component="p">{species.description}</Typography>
        </CardContent>
      </Card>
    </a>
  );
};

SpeciesCard.PropTypes = {
  classes: PropTypes.object.isRequired,
  species: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeciesCard);
