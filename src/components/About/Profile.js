import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import ImagePlaceholder from "../../assets/images/placeholder.png";
import Paper from "material-ui/Paper";
import { Title, Paragraph } from "../common/Text";
import { grey } from "material-ui/colors";

const ProfileWrapper = styled(Grid)`
  & {
    flex: 1 !important;
    padding: 1rem;
    text-align: center;
    max-width: 300px;
  }
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 1rem;
  border-radius: 50% 50%;
`;

const Profile = ({ profile }) => (
  <ProfileWrapper item>
    {/* <Paper style={{height: "600px"}}> */}
      <Photo src={profile.photo || ImagePlaceholder} alt={profile.name} />
      <Title
        variant="title"
        txtColor={grey[800]}
        padding="1rem 0 0.5rem"
        fontWeight="bold"
      >
        {profile.name}
      </Title>
      <Title variant="subheading" txtColor={grey[800]}>
        {profile.role}
      </Title>
      <Paragraph variant="body1" txtColor={grey[700]} padding="1rem">
        {profile.description}
      </Paragraph>
    {/* </Paper> */}
  </ProfileWrapper>
);

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.profile
  })
};

Profile.defaultProps = {
  profile: {
    name: "John Doe",
    role: "Data analyst",
    description:
      "John Doe is a good guy. He is dedicated to his career. He is a self-taught expert in data science."
  }
};

export default Profile;
