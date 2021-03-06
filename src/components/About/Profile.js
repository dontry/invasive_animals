import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import ImagePlaceholder from "../../assets/images/placeholder.png";
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

const SkillList = styled.ul`
  padding-left: 5rem;
  list-style: disc;
  line-height: 1.5em;
`;

const Profile = ({ profile }) => (
  <ProfileWrapper item>
    {/* <Paper style={{height: "600px"}}> */}
    <Photo src={profile.photo || ImagePlaceholder} alt={profile.name} />
    <Title
      variant="title"
      text_color={grey[800]}
      padding="1rem 0 0.5rem"
      font_weight="bold"
    >
      {profile.name}
    </Title>
    <Title variant="subheading" text_color={grey[800]}>
      {profile.role}
    </Title>
    <SkillList>
      {profile.description.map((item, index) => (
        <li key={index}>
          <Paragraph variant="body1" text_color={grey[600]} >
            {item}
          </Paragraph>
        </li>
      ))}
    </SkillList>
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
    description: ["Swimming", "Basketball"]
  }
};

export default Profile;
