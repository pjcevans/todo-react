

export function toggles(state = {activeInput: [0,0,0]}, action) {
  switch (action.type) {

    case "SELECT_ACTIVE_INPUT":
      return {
        ...state,
        activeInput: [action.catID, action.todoID, action.subtodoID]
      };

    default:
      return state;

  }
}
