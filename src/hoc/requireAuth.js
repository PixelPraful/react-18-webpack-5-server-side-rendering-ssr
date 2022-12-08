import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends React.Component {
    render () {
      switch(this.props.auth) {
        case false:
          return <Navigate to="/" replace />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProps)(RequireAuth);
}