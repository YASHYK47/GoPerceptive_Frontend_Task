import { CREATE_EVENT } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
