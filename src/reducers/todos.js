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
            "subID": 1
          },
          {
            "title": "Plan the page",
            "subID": 2
          }
        ]
      },
      {
        "title": "Wireframe the App",
        "subtodos": [
          {
            "title": "Buy a mac >:",
            "subID": 1
          },
          {
            "title": "Research Balsamiq vs Figma vs Sketch",
            "subID": 2
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
            "subID": 1
          },
          {
            "title": "Plan out state tree(s)",
            "subID": 2
          }
        ]
      }
    ]
  }
];



export function todos(state = {todosList}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.map(category =>
        (category.catID === action.catID)
          ? {...category, "todos": [...category.todos, {text: action.text, todoID: action.todoID + 1}]}
          : category
      );

    default:
      return state;
  }
}
