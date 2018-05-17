import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { Link } from "react-router-dom";
import { Title, Paragraph } from "../common/Text";
import ImagePlaceholder from "../../assets/images/placeholder.png";
import { grey } from "material-ui/colors";
import { underscoreName } from "../../utils/tools";

const EntryWrapper = styled(Grid)`
  && {
    padding: 1rem;
  }
`;

const ThumbnailWrapper = styled(Grid)`
  && {
    @media screen and (max-width: 599px) {
      & {
        margin: 0 auto;
        align-self: center;
      }
    }
  }
`;

const ContentWrapper = styled(Grid)`
  && {
    padding: ${props => props.padding || "none"};
    overflow: hidden;
  }
`;

const Thumbnail = styled.img`
  width: ${props => props.size || "180px"};
  height: ${props => props.size || "180px"};
  @media screen and (max-width: 400px) {
    & {
      margin: 0 auto;
    }
  }
`;

const BriefIntroWrapper = styled.div`
  padding-top: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Entry = ({ species }) => {
  return (
    <Link
      to={`/species/${underscoreName(species.CommonName)}`}
    >
      <Paper style={{ marginBottom: "1rem" }}>
        <EntryWrapper container justify="space-around">
          <ThumbnailWrapper item>
            <Thumbnail
              src={species.ImageURL || ImagePlaceholder}
              alt={species.CommonName}
            />
          </ThumbnailWrapper>
          <ContentWrapper item padding={"0.5rem 1rem"} xs={12} sm={7}>
            <Title variant="title" align="left" text_color={grey[800]}>
              {species.CommonName}
            </Title>
            <Title variant="body1" align="left" text_color={grey[700]}>
              {species.AcademicalName}
            </Title>
            <BriefIntroWrapper>
              <Paragraph text_color={grey[700]}>
                {species.BriefIntroduction}
              </Paragraph>
            </BriefIntroWrapper>
          </ContentWrapper>
        </EntryWrapper>
      </Paper>
    </Link>
  );
};

Entry.propTypes = {
  species: PropTypes.object
};

Entry.defaultTypes = {
  species: {
    CommonName: "Common Name",
    AcademicalName: "Academical Name"
  }
};

export default Entry;
