import React, { Fragment } from "react";
import styled from "styled-components";

import { grey } from "material-ui/colors";
import FacebookProvider, { Comments } from "react-facebook";

import { Title } from "../common/Text";
import Passage from "../common/Passage";
import { ScreenMask } from "../common/Mask";
import Gallery, { Slider } from "./Gallery";
import LoadingSpinner from "../common/LoadingSpinner";
import GalleryComposite from "./GalleryComposite";

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

const SpeciesName = ({ speciesName, academicalName }) => {
  return (
    <Fragment>
      <Title variant="display1" txtColor={grey[800]} align="left">
        {speciesName}
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
    const type = attr.key === "Species" ? "display1" : "title";
    const info = renderItem(
      { name: attr.value, value: content[attr.key] },
      type
    );
    return info;
  });
}

function renderItem(info, type) {
  if (info.value === "") return null;
  return <Passage title={info.name} content={info.value} />;
}

const CommentSection = () => (
  <Fragment>
    <Title variant="title" txtColor={grey[700]} align="left" />
    <FacebookProvider appId="439671156486299">
      <Comments />
    </FacebookProvider>
  </Fragment>
);

const DetailInfo = ({ content, images }) => {
  if (!content) {
    return (
      <ScreenMask>
        <LoadingSpinner />
      </ScreenMask>
    );
  }
  const speciesInfo = renderSpeciesInfo(content);
  return (
    <DetailInfoWrapper>
      <SpeciesName
        speciesName={content.Species}
        academicalName={content.AcademicalName}
      />
      {images &&
        images.length > 0 && (
          <GalleryComposite images={images}>
            <Slider />
          </GalleryComposite>
        )}
      {speciesInfo}
      <CommentSection />
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
