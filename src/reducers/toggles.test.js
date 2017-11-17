import * as toggles from "./toggles.js";


describe("Toggle Tests", () => {
  it("Should return the initial state", () => {
    expect(toggles.toggles(undefined, {})).toEqual({activeInput: [0,0,0], editMode: 0});
  });

  it("Should return a location identifier when provided with ID inputs", () => {
    expect(toggles.toggles(undefined,
      {
        type: "SELECT_ACTIVE_INPUT",
        catID: 5,
        todoID: 9,
        subtodoID: 3
      }
    )).toEqual({activeInput: [5,9,3], editMode: 0});  });

  it("Should return 1 when current state is 0", () => {
    expect(toggles.toggles(undefined,
      {
        type: "TOGGLE_EDIT_MODE"
      }
    )).toEqual({activeInput: [0,0,0], editMode: 1});
  });

  it("Should return 0 when current state is 1", () => {
    expect(toggles.toggles({activeInput: [0,0,0], editMode: 1},
      {
        type: "TOGGLE_EDIT_MODE"
      }
    )).toEqual({activeInput: [0,0,0], editMode: 0});
  });

});
