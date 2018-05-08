import React, { Fragment, Component } from "react";
import styled from "styled-components";

import { grey } from "material-ui/colors";

import { Title } from "../common/Text";
import Passage from "../common/Passage";
import { ScreenMask } from "../common/Mask";
import Gallery, { Slider } from "./Gallery";
import Loader from "../common/Loader";
import GalleryComposite from "./GalleryComposite";
import { GeographicalDistribution } from "../Insight/DistributionMap";
import CommentSection from "../common/CommentSection";

const ATTRIBUTE_NAMES = [
  { key: "BriefIntroduction", value: "Brief Introduction" },
  { key: "Distribution", value: "Distribution" },
  { key: "Habitat", value: "Habitat" },
  { key: "PhysicalDescription", value: "Physical Description" },
  { key: "FoodHabits", value: "Food Habits" },
  { key: "Impact", value: "Impact" },
  { key: "Control", value: "Control" }
];

const DetailInfoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
`;

const SectionWrapper = styled.div`
  padding-top: 1rem;
`;

const SpeciesName = ({ commonName, academicalName }) => {
  return (
    <Fragment>
      <Title variant="display1" txtColor={grey[800]} align="left">
        {commonName}
      </Title>
      <Title
        variant="title"
        txtColor={grey[600]}
        align="left"
        padding="0.5rem 0 2rem"
      >
        {academicalName}
      </Title>
    </Fragment>
  );
};

function renderSpeciesInfo(content) {
  return ATTRIBUTE_NAMES.map(attr => {
    const info = renderItem.call(content, attr);
    return info;
  });
}

function renderItem(attr) {
  if (this[attr.key] === "") return null;
  return (
    <Fragment>
      <Passage title={attr.value} content={this[attr.key]} />
      {attr.key == "Distribution" && (
        <div style={{ width: "75%", margin: "0 auto" }}>
          <GeographicalDistribution species={this.CommonName} />
          <Title txtColor={grey[700]}>
            Distribution of {this.CommonName} in Australia
          </Title>
        </div>
      )}
    </Fragment>
  );
}

class DetailInfo extends Component {
  componentWillMount() {
    const { species } = this.props;
    if (species.ID) {
      this.props.onFindImagesBySpeciesId(species.ID);
    }
  }
  componentWillUnmount() {
    this.props.onReset();
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
    const speciesInfo = renderSpeciesInfo(species);
    return (
      <DetailInfoWrapper>
        <SpeciesName
          commonName={species.CommonName}
          academicalName={species.AcademicalName}
        />
        {images &&
          images.isFinished &&
          Array.isArray(images.queryResult) && (
            <GalleryComposite
              images={images.queryResult.map(img => img.ImageURL)}
            >
              <Slider />
            </GalleryComposite>
          )}
        {speciesInfo}
        <CommentSection />
      </DetailInfoWrapper>
    );
  }
}
export default DetailInfo;
