import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import eventsReducer from "./events_reducers";

const rootReducer = combineReducers({
  events: eventsReducer,
  form: formReducer,
});

export default rootReducer;
