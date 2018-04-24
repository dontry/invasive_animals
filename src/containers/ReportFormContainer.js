import {connect} from "react-redux";
import ReportForm from "../components/Report/ReportForm";

const mapStateToProps = (state) => {
    return {
        image: state.detection.uploadImage,
    }
}

export default connect(mapStateToProps)(ReportForm)

