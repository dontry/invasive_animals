const INITIAL_STATE = { message: "" };

export default function(state = INITIAL_STATE, action) {
  if (action.type.includes("FAILURE") || action.type.includes("SUCCESS")) {
    return { ...state, message: action.type.replace(/_/g, " ") };
  } else {
    return { ...state, message: "" };
  }
}
