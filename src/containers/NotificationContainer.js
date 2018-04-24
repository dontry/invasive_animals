import {connect} from "react-redux";
import Notification from "../components/common/Notification";

function mapStateToProps(state) {
    return {
        message: state.notifications.message
    }
}

export default connect(mapStateToProps, null)(Notification);