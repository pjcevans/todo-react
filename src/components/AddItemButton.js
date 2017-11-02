import React, { Component } from "react";



class AddItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }


  render() {
    let catID = this.props.catID || 0;
    let todoID = this.props.todoID || 0;
    let subtodoID = this.props.subtodoID || 0; // however this will break because of the +1 for incrementing?
    let incrementedSubtodoID = this.props.subtodoID + 1 || 0;

    if (this.props.isActive === true) {
      return (
        <div>
          <p onClick={() => this.props.selectActiveInput(0, 0, 0)}>test- click me</p>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Add a new item..."
            autofocus="true" />
          <p onClick={() => this.props.addItem(this.state.inputValue, catID, todoID, subtodoID)}>Add a {this.props.type}</p>
        </div>
      );
    } else {
      return (
        <p onClick={() => this.props.selectActiveInput(catID, todoID, incrementedSubtodoID)}>test- click me</p>
      );
    }
  }
}

export default AddItemButton;
//
// <div>
//   <p onClick={() => props.selectActiveInput(0, 0, 0)}>test- click me</p>
//   <input />
//   <p onClick={() => props.addTodo("testtesttest", category.catID, category.todos.length)}>Add ToDo, category ID = {category.catID}, ToDo ID = {category.todos.length}</p>
// </div>
// : <p onClick={() => props.selectActiveInput(category.catID, category.todos.length, 0)}>test- click me</p>