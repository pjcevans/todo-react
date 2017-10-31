import React from "react";
import { Row, Grid, Col } from "react-bootstrap";
import "./ToDoApp.css";

const ToDoApp = (props) => {
  // console.log(props)

  // const todosList = props.todosList;


  const todosList = props.todosList;

  return(
    <Grid>

      {/* For each category item, render the title, outcomes & loop over the todos */}
      <Row>
        {todosList.map((category) => {
          return (
            <div>
              <Col className="list-block" xs={12} md={8} >
                <Row className="title-block" >
                  <Col className="title-item" xs={11} md={11}>
                    <p className="title-text">Title: {category.title}</p>
                  </Col>
                </Row>
                {/* For each ToDo render the title and loop over the sub-ToDos */}
                {category.todos.map((todo) => {
                  return (
                    <div>
                      <Row className="todo-block">
                        <Col className="todo-item" xs={11} md={11}>
                          <p className="todo-text">Todo: {todo.title}</p>
                        </Col>
                        <Col xs={1} md={1}>
                          <p  className="todo-text">X</p>
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
                          ?<div>
                            <p onClick={() => props.selectActiveInput(0, 0, 0)}>test- click me</p>
                            <input />
                            <p onClick={() => props.addSubTodo("testsubtestsubtestsub", category.catID, todo.todoID, todo.subtodos.length)}>Add Sub-ToDo, category ID = {category.catID}, ToDo ID = {todo.todoID}, Sub-ToDo ID = {todo.subtodos.length}</p>
                          </div>
                          : <p onClick={() => props.selectActiveInput(category.catID, todo.todoID, todo.subtodos.length + 1)}>test- click me</p>
                      }
                    </div>
                  );
                })}
                {
                  (category.catID === props.activeInput[0] && category.todos.length === props.activeInput[1] && props.activeInput[2] === 0)
                    ?<div>
                      <p onClick={() => props.selectActiveInput(0, 0, 0)}>test- click me</p>
                      <input />
                      <p onClick={() => props.addTodo("testtesttest", category.catID, category.todos.length)}>Add ToDo, category ID = {category.catID}, ToDo ID = {category.todos.length}</p>
                    </div>
                    : <p onClick={() => props.selectActiveInput(category.catID, category.todos.length, 0)}>test- click me</p>
                }


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
            </div>
          );
        })}
      </Row>
      <Row>
        {
          (todosList.length === props.activeInput[0] && props.activeInput[1] === 0 && props.activeInput[2] === 0)
            ?<div>
              <p onClick={() => props.selectActiveInput(0, 0, 0)}>test- click me</p>
              <input />
              <p onClick={() => props.addCategory("testtesttest", todosList.length)}>Add Category, id = {todosList.length + 1}</p>
            </div>
            : <p onClick={() => props.selectActiveInput(todosList.length, 0, 0)}>test- click me</p>
        }


      </Row>

    </Grid>
  );

};
export default ToDoApp;
