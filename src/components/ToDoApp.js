import React from 'react';
import ToDoTitle from './ToDoTitle.js';
import { Row, Grid, Col } from 'react-bootstrap';
import './ToDoApp.css';

const ToDoApp = (props) => {
  const todosList = [
    {
      "title": "Design",
      "outcomes": [
        "Did xyz very well",
        "Like for reference: www.lol.io"
      ],
      "todos": [
        {
          "title": "Sketch out the App",
          "subtodos": [
            {"title": "Actually draw it"},
            {"title": "Plan the page"}
          ]
        },
        {
          "title": "Wireframe the App",
          "subtodos": [
            {"title": "Buy a mac >:"},
            {"title": "Research Balsamiq vs Figma vs Sketch"}
          ]
        }
      ]
    },
    {
      "title": "Planning",
      "outcomes": [],
      "todos": [
        {
          "title": "Split app out into Components",
          "subtodos": []
        },
        {
          "title": "Capture logic required",
          "subtodos": [
            {"title": "Decide whether redux is needed"},
            {"title": "Plan out state tree(s)"}
          ]
        }
      ]
    }
  ];
  return(
    <Grid>

      {/* For each category item, render the title, outcomes & loop over the todos */}
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
                      )
                    })}

                  </div>
                )
              })}
            </Col>
            <Col xs={12} md={4} className="outcomes">
              <p>Outcomes: {category.outcomes}</p>
            </Col>
          </div>
        )
      })}

    </Grid>
  )

}
export default ToDoApp
