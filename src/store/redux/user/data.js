import { GET_USER_SUCCESS } from "./get";

const initialState = {
  firstName: "Test 1",
  lastName: "Test 2",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...initialState,
        ...action.result,
      };
    default:
      return state;
  }
}
