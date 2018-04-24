import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import {Link} from "react-router-dom";
import {Title} from "../common/Text";
import ImagePlaceholder from "../../assets/images/placeholder.png";
import {grey} from "material-ui/colors";
import {speciesPicFinder} from "../../utils/tools";

const EntryWrapper = styled(Grid)`
  && {
    padding: 1rem;
    border-bottom: 1px solid ${grey[500]};
    &:first-child {
      padding-top: 0;
    }
  }
`;
const ContentWrapper = styled(Grid)`
  && {
    padding: ${props => props.padding || "none"};
  }
`;

const Thumbnail = styled.img`
  width: ${props => props.size || "180px"};
  height: ${props => props.size || "180px"};
`;

const Entry = ({ species }) => {
  species = {
    ...species,
    image: speciesPicFinder(species.Species)
  };
  return (
    <Link to={`/species/${species.SpeciesID}`}>
      <EntryWrapper container>
        <ContentWrapper item>
          <Thumbnail
            src={species.image || ImagePlaceholder}
            alt={species.Species}
          />
        </ContentWrapper>
        <ContentWrapper item padding={"0.5rem 1rem"}>
          <Title variant="title" align="left" txtColor={grey[800]}>
            {species.Species}
          </Title>
          <Title vairiant="body1" align="left" txtColor={grey[700]}>
            {species.AcademicalName}
          </Title>
        </ContentWrapper>
      </EntryWrapper>
    </Link>
  );
};

Entry.propTypes = {
  species: PropTypes.object
};

Entry.defaultTypes = {
  species: {
    Species: "Common Name",
    AcademicalName: "Academical Name"
  }
};

export default Entry;
