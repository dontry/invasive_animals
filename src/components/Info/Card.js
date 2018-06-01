import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const StyledCard = styled(Card)`
  max-width: 376;
  min-width: 200;
  margin: 1rem;
`;

const SpeciesCard = ({ species }) => {
  return (
    <Link
      to={`/species/${species.CommonName.toUpperCase().replace(" ", "_")}#`}
    >
      <StyledCard>
        <CardMedia
          image={species.ImageURL}
          title={species.CommonName}
          style={{ height: 200 }}
        />
        <CardContent>
          <Typography variant="subheading" component="h4" align="center">
            {species.CommonName.toUpperCase()}
          </Typography>
          {/* <Typography component="p">{species.BriefIntroduction}</Typography> */}
        </CardContent>
      </StyledCard>
    </Link>
  );
};

SpeciesCard.propTypes = {
  species: PropTypes.object.isRequired
};

export default SpeciesCard;
