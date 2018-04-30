import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
//Components
import PageContainer from "../components/common/PageContainer";
import DetailInfo from "../components/Info/DetailInfo";
import {
  getSpeciesById,
  getSpeciesByName
} from "../utils/detectInvasiveSpecies";
import { getImagesById } from "../utils/api";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

class SpeciesInfo extends Component {
  state = {
    content: null,
    images: [],
    notFound: false
  };
  async componentWillMount() {
    // const id = this.props.match.params.id;
    // const content = await getSpeciesById(parseInt(id));
    const name = this.props.match.params.id;
    const content = await getSpeciesByName(
      name.toLowerCase().replace("_", " ")
    );
    if (content) {
      this.setState({ content });
      // const images = await getImagesById(parseInt(id));
      const images = await getImagesById(content.SpeciesID);
      this.setState({ images });
    } else {
      this.setState({ notFound: true });
    }
  }
  render() {
    const { content, images, notFound } = this.state;
    if (notFound) return <Redirect to="/error" />;
    return (
      <Fragment>
        <NavAppBar />
        <PageContainer minHeight="90vh">
          <BreadcrumbsWithRouter />
          <DetailInfo content={content} images={images} />
        </PageContainer>
      </Fragment>
    );
  }
}

export default SpeciesInfo;
