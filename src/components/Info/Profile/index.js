import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "material-ui/Grid";
import { grey } from "material-ui/colors";

import { Title } from "../../common/Text";
import { ScreenMask } from "../../common/Mask";
import { Slider } from "../Gallery";
import Loader from "../../common/Loader"
import GalleryComposite from "../GalleryComposite";
import CommentSection from "../../common/CommentSection";
import AttributeDetail from "./AttributeDetail";
import SpeciesName from "./SpeciesName";
import TaxonomyList from "./TaxonomyList";

const ATTRIBUTE_NAMES = [
  { key: "BriefIntroduction", value: "Brief Introduction" },
  { key: "Distribution", value: "Distribution" },
  { key: "Habitat", value: "Habitat" },
  { key: "PhysicalDescription", value: "Physical Description" },
  { key: "FoodHabits", value: "Food Habits" },
  { key: "Impact", value: "Impact" },
  { key: "Control", value: "Control" }
];

const SpeciesImage = styled.img`
  max-height: 300px;
  max-width: 300px;
  padding-right: 2rem;
  @media screen and (max-width: 376px) {
    & {
      width: 80%;
      margin: 1rem auto;
    }
  }
`;

const DetailInfoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
  @media screen and (max-width: 376px) {
    & {
      width: 100%;
    }
  }
`;

const IntroWrapper = styled(Grid)`
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const SectionWrapper = styled.div`
  padding-bottom: 2rem;
`;

function renderSpeciesAttributes(profile) {
  return ATTRIBUTE_NAMES.map(attr => {
    const content = profile[attr.key];
    return (
      content && (
        <AttributeDetail
          key={attr.key}
          content={content}
          attr={attr}
          category={profile.Category}
          commonName={profile.CommonName}
        />
      )
    );
  });
}

class Profile extends Component {
  componentDidMount() {
    const { species } = this.props;
    if (species.ID) {
      this.props.onFindImagesBySpeciesId(species.ID);
    }
  }
  componentWillUnmount() {
    this.props.reset();
  }
  render() {
    const { species, images } = this.props;
    if (!species) {
      return (
        <ScreenMask>
          <Loader />
        </ScreenMask>
      );
    }
    const speciesInfo = renderSpeciesAttributes(species);
    return (
      <DetailInfoWrapper>
        <SpeciesName
          commonName={species.CommonName}
          academicalName={species.AcademicalName}
        />
        <IntroWrapper container justify="flex-start">
          <Grid item>
            <SpeciesImage src={species.ImageURL} alt={species.CommonName} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TaxonomyList profile={species} />
          </Grid>
        </IntroWrapper>
        {images &&
          images.isFinished &&
          Array.isArray(images.queryResult) && (
            <SectionWrapper>
              <Title variant="title" text_color={grey[800]} align="left">
                Gallery
              </Title>
              <GalleryComposite
                images={images.queryResult.slice(1).map(img => img.ImageURL)}
              >
                <Slider />
              </GalleryComposite>
            </SectionWrapper>
          )}
        <SectionWrapper>{speciesInfo}</SectionWrapper>
        <CommentSection />
      </DetailInfoWrapper>
    );
  }
}

Profile.propTypes = {
  species: PropTypes.object.isRequired,
  images: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onFindImagesBySpeciesId: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default Profile;
