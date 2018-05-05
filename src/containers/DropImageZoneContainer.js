import { connect } from "react-redux";
import DropImageZone from "../components/Detect/DropImageZone";

const mapStateToProps = (state) => {
    return {
        image: state.detection.uploadImage.entity
    }
}

export default connect(mapStateToProps)(DropImageZone);