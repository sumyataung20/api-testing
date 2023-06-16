const initialState = {
  csrfToken: null,
  // Other authentication-related state properties
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CSRF_TOKEN":
      return {
        ...state,
        csrfToken: action.payload,
      };
    // Other cases for handling authentication-related actions

    default:
      return state;
  }
};

export default authReducer;
