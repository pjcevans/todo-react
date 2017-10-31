import * as toggles from "./toggles.js";

const catID = 1;
const todoID = 1;
const subtodoID = 0;

describe("Page toggle settings", () => {

  it("should create an action to set the currently selected input field based on given IDs", () => {
    const expectedAction = {
      type: "SELECT_ACTIVE_INPUT",
      catID,
      todoID,
      subtodoID
    };
    expect(toggles.selectActiveInput(catID, todoID, subtodoID)).toEqual(expectedAction);
  });

});
