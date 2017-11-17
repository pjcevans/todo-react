

export function toggles(state = {activeInput: [0,0,0], editMode: 0}, action) {
  switch (action.type) {

    case "SELECT_ACTIVE_INPUT":
      return {
        ...state,
        activeInput: [action.catID, action.todoID, action.subtodoID]
      };

    case "TOGGLE_EDIT_MODE":
      return {
        ...state,
        editMode: 1 - state.editMode
      };

    default:
      return state;

  }
}
