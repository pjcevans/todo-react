export const addTodo = (text, catID, numberOfTodos) => {
  return {
    type: "ADD_TODO",
    todoID: numberOfTodos + 1,
    catID,
    text
  };
};
