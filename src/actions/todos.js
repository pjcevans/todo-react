export const addTodo = (text, catID, todoID) => {
  return {
    type: "ADD_TODO",
    catID,
    todoID,
    text
  };
};
