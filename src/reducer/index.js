import { combineReducers } from "redux";
import contactReducer from "./cr";

export default combineReducers({
  contact: contactReducer
});
