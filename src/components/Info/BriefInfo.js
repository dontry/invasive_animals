import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title, Paragraph } from "../common/Text";
import ImagePlaceHolder from "../../assets/images/placeholder.png";
import { grey, lime, red } from "material-ui/colors";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { ActionButton } from "../common/ActionButtonGroup";

const Root = styled.div`
    position: relative;
    background-color: ${lime[300]};
`;
const BriefInfoWrapper = styled(Grid)`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 2rem;
`;

const InfoGridItem = styled(Grid)`
  && {
    height: 80%;
    width: 50%;
    max-width: 400px;
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

const BackButton = styled(ActionButton)`
  &&& {
    position: absolute;
    z-index: 100;
    margin: 2rem;
    top: 2rem
    left: 2rem;
    color: #fff;
  }
`;

const BASE_URL = "/species/";

const BriefInfo = ({ species, handleBack }) => {
  return (
    <Root>
      <BriefInfoWrapper container justify="center" alignItems="center">
        <InfoGridItem item>
          <InfoPaper>
            <Title variant="title" txtColor={red[700]}>
              Possible invasive species detected
            </Title>
            <Image
              src={species.image || ImagePlaceHolder}
              alt={species.CommonName}
            />
            <Intro>
              <Title variant="title" align="left" txtColor={grey[800]}>
                {species.CommonName}
              </Title>
              <Title variant="subheading" align="left" txtColor={grey[600]}>
                {species.AcademicalName}
              </Title>
              <Paragraph txtColor={grey[800]} padding={"1rem 0 1rem"}>
                {species.BriefIntroduction}
              </Paragraph>
              <Link to={`/species/${species.CommonName.replace(" ", "_")}`}>
                Learn More ……
              </Link>
            </Intro>
          </InfoPaper>
        </InfoGridItem>
      </BriefInfoWrapper>
      <Button
        onClick={handleBack}
        style={{
          position: "absolute",
          zIndex: 100,
          bottom: "2rem",
          left: "2rem"
        }}
      >
        ⬅ back
      </Button>
    </Root>
  );
};

BriefInfo.propTypes = {
  species: PropTypes.object.isRequired
};

export default BriefInfo;
