import React from "react";
import { Row, Grid, Col } from "react-bootstrap";
import AddItemButton from "./AddItemButton";
import "./ToDoApp.css";

const ToDoApp = (props) => {
  // console.log(props)

  // const todosList = props.todosList;


  const todosList = props.todosList;

  return(
    <Grid>
      {/* For each category item, render the title, outcomes & loop over the todos */}
      <Row>
        <Col xs={12} md={8} >
          <h4>Selected Todo list:</h4>
        </Col>
        <Col xs={12} md={4} className="outcomes" >
          <h4 className="outcomes-text">Outcomes:</h4>
        </Col>
      </Row>

      <Row className="list-block">
        {todosList.map((category) => {
          return (
            <Row className="category-block">
              <Col xs={12} md={8} >
                <Row className="title-block" >
                  <Col className="title-item" xs={11} md={11}>
                    <p className="title-text">Title: {category.title}</p>
                  </Col>
                </Row>
                {/* For each ToDo render the title and loop over the sub-ToDos */}
                <Row className="category-under-title-block">
                  {category.todos.map((todo) => {
                    return (
                      <Row className="todo-block">
                        <Row className="todo-item">
                          <Col xs={11} md={11}>
                            <p className="todo-text">Todo: {todo.title}</p>
                          </Col>
                          <Col xs={1} md={1}>
                            <p className="todo-text">X</p>
                          </Col>
                        </Row>

                        {/* Loop over the sub-ToDos */}
                        {todo.subtodos.map((subtodo) => {
                          return (
                            <Row className="subtodo-block">
                              <Col className="subtodo-item" xs={11} md={11}>
                                <p className="subtodo-text">Sub-ToDo: {subtodo.title}</p>
                              </Col>
                              <Col xs={1} md={1}>
                                <p className="subtodo-text">X</p>
                              </Col>
                            </Row>
                          );
                        })}
                        {
                          (category.catID === props.activeInput[0] && todo.todoID === props.activeInput[1] && todo.subtodos.length + 1 === props.activeInput[2])
                            ? <AddItemButton
                              selectActiveInput={props.selectActiveInput}
                              addItem={props.addSubTodo}
                              catID={category.catID}
                              todoID={todo.todoID}
                              subtodoID={todo.subtodos.length}
                              isActive={true}
                              type={"Sub-Todo"} />

                            : <AddItemButton
                              selectActiveInput={props.selectActiveInput}
                              addItem={props.addSubTodo}
                              catID={category.catID}
                              todoID={todo.todoID}
                              subtodoID={todo.subtodos.length}
                              isActive={false}
                              type={"Sub-Todo"} />
                        }
                      </Row>
                    );
                  })}
                  {
                    (category.catID === props.activeInput[0] && category.todos.length === props.activeInput[1] && props.activeInput[2] === 0)
                      ? <AddItemButton
                        selectActiveInput={props.selectActiveInput}
                        addItem={props.addTodo}
                        catID={category.catID}
                        todoID={category.todos.length}
                        isActive={true}
                        type={"Todo"} />
                      : <AddItemButton
                        selectActiveInput={props.selectActiveInput}
                        addItem={props.addTodo}
                        catID={category.catID}
                        todoID={category.todos.length}
                        isActive={false}
                        type={"Todo"} />
                  }
                </Row>


              </Col>
              <Col xs={12} md={4} className="outcomes">
                <ul>
                  {category.outcomes.map((outcome) => {
                    return (
                      <li className="outcomes-text">{outcome}</li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          );
        })}
      </Row>
      <Row>
        {
          (todosList.length + 1 === props.activeInput[0] && props.activeInput[1] === 0 && props.activeInput[2] === 0)
            ? <AddItemButton
              selectActiveInput={props.selectActiveInput}
              addItem={props.addCategory}
              catID={todosList.length}
              isActive={true}
              type={"Category"} />
            : <AddItemButton
              selectActiveInput={props.selectActiveInput}
              addItem={props.addCategory}
              catID={todosList.length + 1}
              isActive={false}
              type={"Category"} />
        }
      </Row>

    </Grid>
  );

};
export default ToDoApp;
