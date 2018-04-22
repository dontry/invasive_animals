import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FacebookProvider, { Comments } from "react-facebook";
import styled from "styled-components";
import { Title, Paragraph } from "../common/Text";
import Gallery from "./GalleryComposite";
import LoadingSpinner from "../common/LoadingSpinner";
import { ScreenMask, Mask } from "../common/Mask";
import { grey } from "material-ui/colors";
import { addLineBreaker } from "../../utils/tools";

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
  const passage = addLineBreaker(info.value);

  return (
    <SectionWrapper key={info.name}>
      <Title
        variant="title"
        txtColor={grey[800]}
        padding="1rem 0 0"
        align="left"
      >
        {info.name}
      </Title>
      <Paragraph
        txtsize="1.1rem"
        txtColor={grey[600]}
        lineHeight="1.2em"
        padding="0.5rem 0 1rem"
      >
        {passage}
      </Paragraph>
    </SectionWrapper>
  );
}

const CommentSection = () => (
  <Fragment>
    <Title variant="title" txtColor={grey[700]} align="left"/>
    <FacebookProvider appId="439671156486299">
      <Comments  />
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
      {images && images.length > 0 && <Gallery images={images} />}
      {speciesInfo}
      <CommentSection />
    </DetailInfoWrapper>
  );
};

export default DetailInfo;
