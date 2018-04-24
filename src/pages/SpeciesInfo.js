import React, {Component, Fragment} from "react";
import PageContainer from "../components/common/PageContainer";
import DetailInfo from "../components/Info/DetailInfo";
import {getSpeciesById} from "../utils/detectInvasiveSpecies";
import {getImagesById} from "../utils/api";
import NavAppBar from "../components/common/NavAppBar";
import BreadcrumbsWithRouter from "../components/common/BreadcrumbsWithRouter";

class SpeciesInfo extends Component {
  state = {
    content: null,
    images: []
  };
  async componentWillMount() {
    const id = this.props.match.params.id;
    const content = await getSpeciesById(parseInt(id));
    this.setState({ content });
    const images = await getImagesById(parseInt(id));
    this.setState({ images });
  }
  render() {
    const { content, images } = this.state;
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
