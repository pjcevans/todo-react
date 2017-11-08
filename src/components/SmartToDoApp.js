import React, { Component, PropTypes } from "react";
import ToDoApp from "./ToDoApp";
import { connect } from "react-redux";
import { addTodo, addSubTodo, addCategory, addOutcome } from "../actions/todos";
import { selectActiveInput } from  "../actions/toggles";

class SmartToDoApp extends Component {

  render() {
    return (
      <ToDoApp
        data={this.props.data}
        addTodo={this.props.addTodo}
        addSubTodo={this.props.addSubTodo}
        addCategory={this.props.addCategory}
        addOutcome={this.props.addOutcome}
        selectActiveInput={this.props.selectActiveInput}
        activeInput={this.props.activeInput } />
    );
  }
}

// SmartToDoApp.propTypes = {
//   todos: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    data: state.data,
    activeInput: state.toggles.activeInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text, catID, numberOfTodos) => dispatch(addTodo(text, catID, numberOfTodos)),
    addOutcome: (text, catID) => dispatch(addOutcome(text, catID)),
    addSubTodo: (text, catID, todoID, numberOfTodos) => dispatch(addSubTodo(text, catID, todoID, numberOfTodos)),
    addCategory: (text, numberofCategories ) => dispatch(addCategory(text, numberofCategories )),
    selectActiveInput: (catID, todoID, subtodoID) => dispatch(selectActiveInput(catID, todoID, subtodoID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartToDoApp);
