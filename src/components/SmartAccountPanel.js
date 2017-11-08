import React, { Component, PropTypes } from "react";
import AccountPanel from "./AccountPanel.js";
import { connect } from "react-redux";
import { reset, loadExampleData } from "../actions/todos";

class SmartAccountPanel extends Component {

  render() {
    return (
      <AccountPanel
        reset={this.props.reset}
        loadExampleData={this.props.loadExampleData} />
    );
  }
}

// SmartToDoApp.propTypes = {
//   todos: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
    loadExampleData: () => dispatch(loadExampleData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartAccountPanel);
