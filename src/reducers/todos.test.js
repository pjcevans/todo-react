import * as todos from "./todos.js";

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

const categoryID = 4;
const testText = "reducerTestText";

describe("ToDoReducers", () => {
  it("Should return the initial state", () => {
    expect(todos.todosLists(undefined, {})).toEqual(defaultState);
  });

  it("Should return the initial state with an added category", () => {
    expect(
      todos.todosLists(
        undefined,
        {
          text: testText,
          type: "ADD_CATEGORY",
          catID: categoryID
        }
      )
    ).toEqual([...defaultState, {title: testText, catID: categoryID, todos: [], outcomes: []}]);
  });
});
