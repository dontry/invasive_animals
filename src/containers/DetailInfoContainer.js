import React from "react";
import { connect } from "react-redux";
import { reduxifiedServices } from "../reducers/feathers";
import DetailInfo from "../components/Info/DetailInfo";

const mapStateToProps = state => {
  return {
    images: state.speciesImages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFindImagesBySpeciesId: id => {
      dispatch(
        reduxifiedServices.species_images.find({
          query: { SpeciesID: id }
        })
      );
    },
    onReset: () => {
      dispatch(reduxifiedServices.species_images.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);
