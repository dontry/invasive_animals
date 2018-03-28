import { connect } from "react-redux";
import ReportForm from "../components/ReportForm";

const mapStateToProps = (state) => {
    return {
        image: state.images.uploadImage,
    }
}

export default connect(mapStateToProps)(ReportForm)

