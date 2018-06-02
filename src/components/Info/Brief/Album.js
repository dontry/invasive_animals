import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { grey} from "material-ui/colors";
import { Link } from "react-router-dom";
import { Paragraph, Title } from "../../common/Text";
import ImagePlaceHolder from "../../../assets/images/placeholder.png";
import { underscoreName } from "../../../utils/tools";

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

const Intro = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 1rem;
  padding-bottom: 2rem;
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

const Album = ({ species }) => {
  return (
    <InfoGridItem item xs={12} >
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
};

Album.propTypes = {
  species: PropTypes.shape({
    CommonName: PropTypes.string.isRequired,
    AcademicalName: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    BriefIntroduction: PropTypes.string.isRequired
  })
};

export default Album;
