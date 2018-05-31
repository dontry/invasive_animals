import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Paragraph, Title } from "../common/Text";
import ImagePlaceHolder from "../../assets/images/placeholder.png";
import { grey, red } from "material-ui/colors";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { underscoreName } from "../../utils/tools";

const Root = styled.div`
  position: relative;
`;
const BriefInfoWrapper = styled(Grid)`
  position: relative;
  min-height: 60vh;
  padding: 2rem 3rem 1rem;
`;

const InfoGridItem = styled(Grid)`
  && {
    height: 80%;
    width: 50%;
    max-width: 400px;
    margin: 1rem;
  }
`;

const InfoPaper = styled(Paper)`
  && {
    width: 100%;
    height: 100%;
    z-index: 100;
    padding: 1rem;
    background-color: #fff;
    text-align: center;
    @media screen and (max-width: 599px) {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 1rem;
  padding-bottom: 2rem;
  margin: 0 auto;
`;

const Intro = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
`;

const InfoDescription = Paragraph.extend`
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.5em !important;
  padding: 0 !important;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
`;

const MessageWrapper = styled.div`
  max-width: 800px;
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  margin: 0 auto;
`;

function renderSpeciesInfo(speciesArray = []) {
  return speciesArray.map(species => {
    return (
      <InfoGridItem item xs={12} key={species.CommonName}>
        <InfoPaper>
          <Image
            src={species.ImageURL || ImagePlaceHolder}
            alt={species.CommonName}
          />
          <Intro>
            <Title variant="title" align="left" text_color={grey[800]}>
              {species.CommonName}
            </Title>
            <Title variant="subheading" align="left" text_color={grey[600]}>
              {species.AcademicalName}
            </Title>
            <InfoDescription text_color={grey[800]} padding={"1rem 0 1rem"}>
              {species.BriefIntroduction}
            </InfoDescription>
            <Link to={`/species/${underscoreName(species.CommonName)}`}>
              Learn More …
            </Link>
          </Intro>
        </InfoPaper>
      </InfoGridItem>
    );
  });
}

const BriefInfo = ({ species, labels }) => {
  return (
    <Root>
      {species.length === 0 ? (
        <MessageWrapper>
          <Title variant="display1" text_color={grey[700]} padding="0 0 1rem">
            Hmmm, it may be not an invasive species.
          </Title>
          <Paragraph variant="body">
            <span style={{ fontWeight: "bolder" }}>
              Relavant Annotations of the uploaded image:&nbsp;
            </span>
            <br />
            {labels.map(label => (
              <span key={label.description} style={{ marginRight: "0.5em" }}>
                {label.description},
              </span>
            ))}
          </Paragraph>
        </MessageWrapper>
      ) : (
        <Fragment>
          <Title variant="title" text_color={red[700]}>
            Possible invasive species identified
          </Title>
          <BriefInfoWrapper container justify="center" alignItems="flex-start">
            {renderSpeciesInfo(species)}
          </BriefInfoWrapper>
        </Fragment>
      )}
    </Root>
  );
};

BriefInfo.propTypes = {
  species: PropTypes.object.isRequired,
  labels: PropTypes.array
};

export default BriefInfo;
