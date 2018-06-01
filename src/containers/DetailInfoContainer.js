import { connect } from "react-redux";
import { reduxifiedServices } from "../reducers/feathers";
import Profile from "../components/Info/Profile";

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
    reset: () => {
      dispatch(reduxifiedServices.species_images.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
