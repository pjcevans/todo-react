const todosList = [
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



export function todosLists(state = Object.assign(todosList), action) {
  switch (action.type) {

    case "ADD_CATEGORY":
      return [...state, {title: action.text, catID: action.catID, todos: [], outcomes: []}];

    case "ADD_TODO":
      // Returns each category unless ID matches, in which case it returns the modified category
      return state.map(category =>
        (category.catID === action.catID)
          ? {...category, "todos": [...category.todos, {title: action.text, todoID: action.todoID, subtodos: []}]}
          : category
      );

    case "ADD_SUBTODO":
      return state.map((category) => {
        if (category.catID === action.catID) {
          // Returns the category with todos list modified
          return Object.assign({...category}, {"todos": category.todos.map(todo =>
            (todo.todoID === action.todoID)
              ? {...todo, "subtodos": [...todo.subtodos, {title: action.text, subTodoID: action.subTodoID}]}
              : todo
          )});
        } else {
          return category;
        }

      });

    default:
      return state;

  }
}
