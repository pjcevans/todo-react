export const selectActiveInput = (catID, todoID, subtodoID) => {
  return {
    type: "SELECT_ACTIVE_INPUT",
    catID,
    todoID,
    subtodoID
  };
};
