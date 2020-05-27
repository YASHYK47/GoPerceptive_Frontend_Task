import { CREATE_EVENT, DELETE_EVENT } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.payload];
    case DELETE_EVENT: {
      return state.filter((event) => event.title !== action.payload);
    }
    default:
      return state;
  }
}
