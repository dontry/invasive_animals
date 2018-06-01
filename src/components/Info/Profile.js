import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "material-ui/Grid";
import { grey, green } from "material-ui/colors";
import Icon from "material-ui/Icon";

import { Title, Paragraph } from "../common/Text";
import { ScreenMask } from "../common/Mask";
import { Slider } from "./Gallery";
import Loader from "../common/Loader";
import GalleryComposite from "./GalleryComposite";
import { GeographicalDistribution } from "../Insight/DistributionMap";
import CommentSection from "../common/CommentSection";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui";
import { addLineBreaker } from "../../utils/tools";

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

const SpeciesName = ({ commonName, academicalName }) => {
  return (
    <Fragment>
      <Title variant="display1" text_color={grey[800]} align="left">
        {commonName}
      </Title>
      <Title variant="title" text_color={grey[600]} align="left">
        {academicalName}
      </Title>
    </Fragment>
  );
};

SpeciesName.propTypes = {
  commonName: PropTypes.string,
  academicalName: PropTypes.string,
}

function renderSpeciesInfo(content) {
  return ATTRIBUTE_NAMES.map(attr => {
    const info = renderItem.call(content, attr);
    return info;
  });
}

function renderItem(attr) {
  if (this[attr.key] === "") return null;
  return (
    <ExpansionPanel key={attr.value}>
      <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
        <Title variant="title" text_color={grey[800]} align="left">
          {attr.value}
        </Title>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: "block" }}>
        <Paragraph
          font_size="1.1em"
          text_color={grey[600]}
          line_height="1.5em"
          padding="0.5rem 0 2rem"
        >
          {addLineBreaker(this[attr.key])}
        </Paragraph>
        {attr.key === "Distribution" &&
          this.Category === "Animal" && (
            <div style={{ width: "100%", margin: "0 auto" }}>
              <GeographicalDistribution species={this.CommonName} />
              <Title text_color={grey[700]}>
                Distribution of {this.CommonName} in Australia
              </Title>
            </div>
          )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

class DetailInfo extends Component {
  componentDidMount() {
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
        <IntroWrapper container justify="flex-start">
          <Grid item>
            <SpeciesImage src={species.ImageURL} alt={species.CommonName} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              {TAXONOMY.map(attr => (
                <Grid item xs={6} key={attr} style={{ marginBottom: "0.5rem" }}>
                  <Paragraph
                    variant="subheading"
                    font_weight="bold"
                    text_color={green[700]}
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

DetailInfo.propTypes = {
  species: PropTypes.object.isRequired,
  images: PropTypes.array,
  onFindImagesBySpeciesId: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}


export default DetailInfo;
