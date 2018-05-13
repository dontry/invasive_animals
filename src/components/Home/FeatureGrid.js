import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { green, lightGreen } from "material-ui/colors";
import Tooltip from "material-ui/Tooltip";
import Grid from "material-ui/Grid";
import {
  BuildingIcon,
  AnimalIcon,
  SubscribeIcon,
  ReportIcon
} from "../common/Icons";
import { Title } from "../common/Text";

const ICON_SIZE = "48px";
const featureData = [
  {
    name: "report",
    description: "Report sightings to us",
    title: (
      <Title variant="title" className="title" text_color={green[500]}>
        Report
      </Title>
    ),
    icon: <ReportIcon size={ICON_SIZE} />
  },
  {
    name: "help center",
    description: "Find a location for help",
    title: (
      <Title variant="title" className="title" text_color={green[500]}>
        Help Center
      </Title>
    ),
    icon: <BuildingIcon size={ICON_SIZE} />
  },
  {
    name: "subscribe",
    description: "Subscribe our newsletters",
    title: (
      <Title variant="title" className="title" text_color={green[500]}>
        Subscribe
      </Title>
    ),
    icon: <SubscribeIcon size={ICON_SIZE} />
  },
  {
    name: "species",
    description: "Explore all invasive species",
    title: (
      <Title variant="title" className="title" text_color={green[500]}>
        Species Wiki
      </Title>
    ),
    icon: <AnimalIcon size={ICON_SIZE} />
  }
];

const GridWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
`;

const StyledGrid = styled(Grid)`
  && {
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

const GridItem = styled(Grid)`
  & * {
    transition: all 1.5s ease-out;
  }
  & .title:after {
    backface-visibility: hidden;
    border: 1px solid rgba(129, 199, 132, 0);
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    width: 0;
  }

  &:hover .title {
    color: ${lightGreen[500]};
  }

  &:hover .title:after {
    backface-visibility: hidden;
    border-color: ${green[300]};
    transition: all 1s ease-out;
    width: 50%;
  }
  &:hover .feature {
    background: ${lightGreen[500]};
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  background: ${green[400]};
  border-radius: 6px;
  & .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FeatureGrid = ({ features = [] }) => (
  <GridWrapper>
    <Title
      variant="display1"
      text_color={green[500]}
      style={{ marginBottom: "2rem" }}
    >
      MORE FEATURES
    </Title>
    <StyledGrid container justify="space-between" style={{ margin: "0 auto" }}>
      {features.map(feature => (
        <GridItem
          item
          xs={6}
          md={3}
          key={feature.name}
          style={{ maxWidth: 300, minHeight: 200 }}
        >
          <Grid container direction="column">
            <Tooltip
              id={`tooltip-${feature.name}`}
              title={feature.description}
              placement="top"
            >
              <Link to={`/${feature.name.toLowerCase().replace(" ", "_")}`}>
                <Grid item>
                  <IconWrapper className="feature">
                    <div className="icon">{feature.icon}</div>
                  </IconWrapper>
                </Grid>
                <Grid item>{feature.title}</Grid>
              </Link>
            </Tooltip>
          </Grid>
        </GridItem>
      ))}
    </StyledGrid>
  </GridWrapper>
);

FeatureGrid.defaultProps = {
  features: featureData
};

export default FeatureGrid;
