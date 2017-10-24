import React from 'react';
import ToDoTitle from './ToDoTitle.js';
import { Row, Grid} from 'react-bootstrap';

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
      <Row>
          <p>Hello this is a ToDo App</p>
      </Row>

      <Row>
        <ToDoTitle />
      </Row>

      {/* For each category item, render the title, outcomes & loop over the todos */}
      {todosList.map((category) => {
        return (
          <Row>
            <p>Title: {category.title}</p>

            {/* For each ToDo render the title and loop over the sub-ToDos */}
            {category.todos.map((todo) => {
              return (
                <div>
                  <p>Todo: {todo.title}</p>

                  {/* Loop over the sub-ToDos */}
                  {todo.subtodos.map((subtodo) => {
                    return <p>{subtodo.title}</p>
                  })}

                </div>
              )
            })}

            <p>Outcomes: {category.outcomes}</p>
          </Row>
        )
      })}

    </Grid>
  )

}
export default ToDoApp
