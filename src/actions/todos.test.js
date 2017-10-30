import * as todos from "./todos.js";

const testText = "testing";
const categoryID = 5;
const numberOfTodos = 4;

describe("Todos actions", () => {
  it("should create a create todo action based on current category ID and number of extant ToDos", () => {
    const catID = categoryID;
    const todoID = numberOfTodos +  1;
    const text = testText;
    const expectedAction = {
      catID,
      todoID,
      type: "ADD_TODO",
      text
    };
    expect(todos.addTodo(testText, categoryID, numberOfTodos)).toEqual(expectedAction);
  });
});
