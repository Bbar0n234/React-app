import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    render () {
        return  <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{ logout} )(HeaderContainer);
