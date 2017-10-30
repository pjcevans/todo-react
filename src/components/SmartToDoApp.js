import React, { Component, PropTypes } from "react";
import ToDoApp from "./ToDoApp";
import { connect } from "react-redux";
import { addTodo, addSubTodo, addCategory } from "../actions/todos";

class SmartToDoApp extends Component {

  render() {
    return (
      <ToDoApp
        todosList={this.props.todos}
        addTodo={this.props.addTodo}
        addSubTodo={this.props.addSubTodo}
        addCategory={this.props.addCategory} />
    );
  }
}

// SmartToDoApp.propTypes = {
//   todos: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    todos: state.todosLists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text, catID, numberOfTodos) => dispatch(addTodo(text, catID, numberOfTodos)),
    addSubTodo: (text, catID, todoID, numberOfTodos) => dispatch(addSubTodo(text, catID, todoID, numberOfTodos)),
    addCategory: (text, numberofCategories ) => dispatch(addCategory(text, numberofCategories ))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartToDoApp);
