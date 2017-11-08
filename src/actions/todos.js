export const addCategory = (text, numberofCategories) => {
  return {
    type: "ADD_CATEGORY",
    catID: numberofCategories + 1,
    text
  };
};

export const addTodo = (text, catID, numberOfTodos) => {
  return {
    type: "ADD_TODO",
    todoID: numberOfTodos + 1,
    catID,
    text
  };
};

export const addOutcome = (text, catID) => {
  return {
    type: "ADD_OUTCOME",
    catID,
    text
  };
};

export const addSubTodo = (text, catID, todoID, numberOfSubTodos) => {
  return {
    type: "ADD_SUBTODO",
    todoID,
    catID,
    subTodoID: numberOfSubTodos + 1,
    text
  };
};
