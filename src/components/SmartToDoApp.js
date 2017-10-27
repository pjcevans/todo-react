import React, { Component, PropTypes } from "react";
import ToDoApp from "./ToDoApp";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

class SmartToDoApp extends Component {

  render() {
    return (
      <ToDoApp
        todosList={this.props.todos}
        addTodo={this.props.addTodo} />
    );
  }
}

// SmartToDoApp.propTypes = {
//   todos: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todosList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text, catID, todoID) => dispatch(addTodo(text, catID, todoID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartToDoApp);
