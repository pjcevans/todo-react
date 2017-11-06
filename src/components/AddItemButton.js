import React, { Component } from "react";
import { Row, Button, FormControl, FormGroup, ControlLabel, Form } from "react-bootstrap";
import "./AddItemButton.css";
import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";


class AddItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleSubmit(value, catID, todoID, incrementedSubtodoID) {
    this.props.addItem(value, catID, todoID, incrementedSubtodoID);
    this.setState({ inputValue: "" });
  }

  render() {
    let catID = this.props.catID || 0;
    let todoID = this.props.todoID || 0;
    let subtodoID = this.props.subtodoID || 0; // however this will break because of the +1 for incrementing?
    let incrementedSubtodoID = this.props.subtodoID + 1 || 0;
    // let incrementedTodoID = this.props.todoID + 1 || 0;
    let classes = {
      "Sub-Todo": "subtodo-block",
      "Todo": "",
      "Category": ""
    };
    let inputClass = classes[this.props.type];

    if (this.props.isActive === true) {
      return (
        <Row className="input-row">
          <p className={inputClass} onClick={() => this.props.selectActiveInput(0, 0, 0)}><FaPlusSquareO /></p>
          <Form inline>
            <FormGroup className="input-form">
              <ControlLabel className="input-item">Add a {this.props.type}</ControlLabel>
              <FormControl
                className="input-item"
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                placeholder="Add a new item..."
                autoFocus="true" />
              <Button className="input-item" type="button" onClick={() => this.handleSubmit(this.state.inputValue, catID, todoID, subtodoID)}>Submit</Button>
            </FormGroup>
          </Form>
        </Row>
      );
    } else {
      return (
        <p className={inputClass} onClick={() => this.props.selectActiveInput(catID, todoID, incrementedSubtodoID)}><FaPlusSquareO /></p>
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
