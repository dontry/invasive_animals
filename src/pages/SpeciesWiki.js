import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { lime } from "material-ui/colors";

import PageContainer from "../components/common/PageContainer";
import { Title } from "../components/common/Text";

import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";
import SpeciesGallery from "../components/Info/SpeciesGallery";

const SpeciesWiki = () => {
  return (
    <Fragment>
      <NavAppBar />
      <BreadcrumbsWithRouter />
      <PageContainer style={{padding: "1rem 2rem"}}>
        <Title variant="display2" txtColor={lime[700]} padding="0 1rem 2rem">
          Invasive Species Wiki
        </Title>
        <SpeciesGallery />
      </PageContainer>
    </Fragment>
  );
};

export default SpeciesWiki;
