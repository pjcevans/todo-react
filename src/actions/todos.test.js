import * as todos from "./todos.js";

const testText = "testing";
const categoryID = 5;
const testTodoID = 16;
const numberOfSubTodos = 7;
const numberOfTodos = 4;
const numberofCategories = 2;

describe("Todos actions", () => {

  it("should create a create todo actions based on current number of categories", () => {
    const catID = numberofCategories + 1;
    const text = testText;
    const expectedAction = {
      catID,
      type: "ADD_CATEGORY",
      text
    };
    expect(todos.addCategory(testText, numberofCategories)).toEqual(expectedAction);
  });

  it("should create a create todo actions based on current category ID and number of extant ToDos", () => {
    const catID = categoryID;
    const todoID = numberOfTodos + 1;
    const text = testText;
    const expectedAction = {
      catID,
      todoID,
      type: "ADD_TODO",
      text
    };
    expect(todos.addTodo(testText, categoryID, numberOfTodos)).toEqual(expectedAction);
  });

  it("should create sub-todo actions based on category ID, ToDo ID, and number of extant sub-todos", () => {
    const catID = categoryID;
    const todoID = testTodoID;
    const subTodoID = numberOfSubTodos + 1;
    const text = testText;
    const expectedAction = {
      catID,
      todoID,
      subTodoID,
      type: "ADD_SUBTODO",
      text
    };
    expect(todos.addSubTodo(testText, categoryID, testTodoID, numberOfSubTodos)).toEqual(expectedAction);
  });
});
