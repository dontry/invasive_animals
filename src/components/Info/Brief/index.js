import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { grey, red } from "material-ui/colors";
import Grid from "material-ui/Grid";
import { Paragraph, Title } from "../../common/Text";
import Album from "./Album";

const Root = styled.div`
  position: relative;
`;

const AlbumWrapper = styled(Grid)`
  position: relative;
  min-height: 60vh;
  padding: 2rem 3rem 1rem;
`;

const MessageWrapper = styled.div`
  max-width: 800px;
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  margin: 0 auto;
`;

const Brief = ({ species = [], labels = [] }) => {
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
            {labels.map(label => label.description).join(", ")}
          </Paragraph>
        </MessageWrapper>
      ) : (
        <Fragment>
          <Title variant="title" text_color={red[700]}>
            Possible invasive species identified
          </Title>
          <AlbumWrapper container justify="center" alignItems="flex-start" spacing={16}>
            {species.map(item => (
              <Album key={item.CommonName} species={item} />
            ))}
          </AlbumWrapper>
        </Fragment>
      )}
    </Root>
  );
};

Brief.propTypes = {
  species: PropTypes.array,
  labels: PropTypes.arrayOf({
    description: PropTypes.string.isRequired
  })
};

export { default as Album } from "./Album";
export default Brief;
