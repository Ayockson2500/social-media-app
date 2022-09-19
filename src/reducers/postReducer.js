import { CREAT_POST, DELETE_POST, EDIT_POST } from "../actions/types";
import _ from "lodash";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case CREAT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
        return state
  }
};

export default postReducer;
