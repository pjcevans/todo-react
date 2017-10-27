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
              <Col xs={12} md={8} className="category">
                <p className="category-text">Title: {category.title}</p>

                {/* For each ToDo render the title and loop over the sub-ToDos */}
                {category.todos.map((todo) => {
                  return (
                    <div>
                      <Row>
                        <Col className="todo" xs={11} md={11}>
                          <p className="todo-text">Todo: {todo.title}</p>
                        </Col>
                        <Col xs={1} md={1}>
                          <p  className="todo-text">X</p>
                        </Col>
                      </Row>

                      {/* Loop over the sub-ToDos */}
                      {todo.subtodos.map((subtodo) => {
                        return (
                          <Row>
                            <Col className="subtodo" xs={11} md={11}>
                              <p className="subtodo-text">Sub-ToDo: {subtodo.title}</p>
                            </Col>
                            <Col xs={1} md={1}>
                              <p className="subtodo-text">X</p>
                            </Col>
                          </Row>
                        );
                      })}
                      <p>Add Sub-ToDo, category ID = {category.catID}, ToDo ID = {category.todos.length}, Sub-ToDo ID = {todo.subtodos.length + 1} </p>

                    </div>
                  );
                })}
                <p>Add ToDo, category ID = {category.catID}, ToDo ID = {category.todos.length + 1}</p>
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
      <Row><p>Add Category, id = {todosList.length + 1}</p></Row>

    </Grid>
  );

};
export default ToDoApp;
