import React, { Fragment, Component } from "react";
import styled from "styled-components";

import Grid from "material-ui/Grid";
import { grey, green } from "material-ui/colors";
import Icon from "material-ui/Icon";

import { Title, Paragraph } from "../common/Text";
import Passage from "../common/Passage";
import { ScreenMask } from "../common/Mask";
import Gallery, { Slider } from "./Gallery";
import Loader from "../common/Loader";
import GalleryComposite from "./GalleryComposite";
import { GeographicalDistribution } from "../Insight/DistributionMap";
import CommentSection from "../common/CommentSection";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  ExpansionPanelDetails
} from "material-ui";

const TAXONOMY = ["Kingdom", "Phylum", "Class", "Order", "Family"];

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

const IntroWrapper = styled(Grid)`
  padding-top: 1rem;
`;
const SectionWrapper = styled.div`
  padding-bottom: 2rem;
`;

const SpeciesName = ({ commonName, academicalName }) => {
  return (
    <Fragment>
      <Title variant="display1" txtColor={grey[800]} align="left">
        {commonName}
      </Title>
      <Title variant="title" txtColor={grey[600]} align="left">
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
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
        <Title
          variant="title"
          txtColor={grey[800]}
          align="left"
        >
          {attr.value}
        </Title>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{display: "block"}}>
        <Paragraph
          txtSize="1.1em"
          txtColor={grey[600]}
          lineHeight="1.2em"
          padding="0.5rem 0 2rem"
        >
          {this[attr.key]}
        </Paragraph>
        {attr.key === "Distribution" && (
          <div style={{ width: "100%", margin: "0 auto" }}>
            <GeographicalDistribution species={this.CommonName} />
            <Title txtColor={grey[700]}>
              Distribution of {this.CommonName} in Australia
            </Title>
          </div>
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
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
        <IntroWrapper container justify="space-between">
          <Grid item xs={5}>
            <img
              style={{ maxHeight: 300, maxWidth: "100%" }}
              src={species.ImageURL}
              alt={species.CommonName}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              {TAXONOMY.map(attr => (
                <Grid item xs={6}>
                  <Paragraph
                    variant="subheading"
                    fontWeight="bold"
                    txtColor={green[700]}
                  >
                    {attr}:
                  </Paragraph>
                  <Paragraph variant="body1">{species[attr]}</Paragraph>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </IntroWrapper>
        {images &&
          images.isFinished &&
          Array.isArray(images.queryResult) && (
            <SectionWrapper>
              <Title variant="title" txtColor={grey[800]} align="left">
                Gallery
              </Title>
              <GalleryComposite
                images={images.queryResult
                  .slice(1, -1)
                  .map(img => img.ImageURL)}
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
export default DetailInfo;
