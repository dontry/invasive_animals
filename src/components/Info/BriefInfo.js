import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Paragraph, Title} from "../common/Text";
import ImagePlaceHolder from "../../assets/images/placeholder.png";
import {grey, lime, red} from "material-ui/colors";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

const Root = styled.div`
  position: relative;
  background-color: ${lime[300]};
`;
const BriefInfoWrapper = styled(Grid)`
  position: relative;
  min-height: 80vh;
  padding: 5rem 3rem 2rem;
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

const MessageWrapper = Title.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackButton = styled(Button)`
  &&& {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 2rem;
    color: #fff;
  }
`;

const BASE_URL = "/species/";
const IMAGE_URL = "/assets/images/species/";

function renderSpeciesInfo(speciesArray) {
  return speciesArray.map(species => {
    const speciesId = species.Species.replace(" ", "_").toLowerCase();
    return (
      <InfoGridItem item>
        <InfoPaper>
          <Title variant="title" txtColor={red[700]}>
            Possible invasive species detected
          </Title>
          <Image
            src={`${IMAGE_URL}${speciesId}.jpg` || ImagePlaceHolder}
            alt={species.Species}
          />
          <Intro>
            <Title variant="title" align="left" txtColor={grey[800]}>
              {species.Species}
            </Title>
            <Title variant="subheading" align="left" txtColor={grey[600]}>
              {species.AcademicalName}
            </Title>
            <InfoDescription txtColor={grey[800]} padding={"1rem 0 1rem"}>
              {species.BriefIntroduction}
            </InfoDescription>
            <Link to={`/species/${species.Species.toLowerCase().replace(" ", "_")}`}>Learn More ……</Link>
          </Intro>
        </InfoPaper>
      </InfoGridItem>
    );
  });
}

const BriefInfo = ({ species, handleBack }) => {
  return (
    <Root>
      <BriefInfoWrapper container justify="center" alignItems="flex-start">
        {species.length === 0 ? (
          <MessageWrapper variant="display3" txtColor={red[500]}>
            It may be not an invasive species.
          </MessageWrapper>
        ) : (
          renderSpeciesInfo(species)
        )}
      </BriefInfoWrapper>
      <BackButton onClick={handleBack}>
        <Title variant="display2" txtColor={lime[800]}>
          ⬅ BACK
        </Title>
      </BackButton>
    </Root>
  );
};

BriefInfo.propTypes = {
  species: PropTypes.object.isRequired
};

export default BriefInfo;
