import * as todos from "./todos.js";
const categoryID = 4;
const testText = "reducerTestText";
const testNumberofTodos = 0;

describe("ToDoReducers", () => {
  it("Should return the initial state", () => {
    expect(todos.data(undefined, {})).toEqual({todosList: []});
  });

  it("Should return the initial state with an added category", () => {
    expect(
      todos.data(
        undefined,
        {
          text: testText,
          type: "ADD_CATEGORY",
          catID: categoryID
        }
      )
    ).toEqual({todosList: [{title: testText, catID: categoryID, todos: [], outcomes: []}]});
  });

  it("Should clear all todos list data", () => {
    expect(
      todos.data(
        {todosList:defaultState},
        {
          type: "RESET"
        }
      )
    ).toEqual({todosList: []});
  });

  it("Should add a todo item", () => {
    expect(
      todos.data(
        singleCategory,
        {
          type: "ADD_TODO",
          todoID: testNumberofTodos + 1,
          catID: categoryID,
          text: testText
        }
      )
    ).toEqual({todosList: []});
  });
});






const singleCategory = {todosList: [{title: testText, catID: categoryID, todos: [], outcomes: []}]};
const singleCategorysingleTodo = {todosList: [{title: testText, catID: categoryID, todos: [{title: testText, todoID: testNumberofTodos + 1, subTodos: []], outcomes: []}]};
// Larger test data instantiations
const defaultState = [
  {
    "title": "Design",
    "catID": 1,
    "outcomes": [
      "Did xyz very well",
      "Like for reference: www.lol.io"
    ],
    "todos": [
      {
        "title": "Sketch out the App",
        "todoID": 1,
        "subtodos": [
          {
            "title": "Actually draw it",
            "subTodoID": 1
          },
          {
            "title": "Plan the page",
            "subTodoID": 2
          }
        ]
      },
      {
        "title": "Wireframe the App",
        "todoID": 2,
        "subtodos": [
          {
            "title": "Buy a mac >:",
            "subTodoID": 1
          },
          {
            "title": "Research Balsamiq vs Figma vs Sketch",
            "subTodoID": 2
          }
        ]
      }
    ]
  },
  {
    "title": "Planning",
    "catID": 2,
    "outcomes": [],
    "todos": [
      {
        "title": "Split app out into Components",
        "todoID": 1,
        "subtodos": []
      },
      {
        "title": "Capture logic required",
        "todoID": 2,
        "subtodos": [
          {
            "title": "Decide whether redux is needed",
            "subTodoID": 1
          },
          {
            "title": "Plan out state tree(s)",
            "subTodoID": 2
          }
        ]
      }
    ]
  }
];
