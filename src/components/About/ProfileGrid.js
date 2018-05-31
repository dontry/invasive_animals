import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import team_profile from "../../assets/team_profile";

import Grid from "material-ui/Grid";
import Profile from "./Profile";

const GridWrapper = styled(Grid)`
  && {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-around;
    overflow: hidden;
    padding: 0.5rem;
    margin: 0 auto;
    width: ${props => props.width || "100%"};
  }
`;

const ProfileGrid = ({ profiles, width }) => (
  <GridWrapper container direction="row" justify="space-between" width={width}>
    {profiles.map(profile => <Profile profile={profile} key={profile.name} />)}
  </GridWrapper>
);

ProfileGrid.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string
};

ProfileGrid.defaultProps = {
  profiles: team_profile
};

export default ProfileGrid;
