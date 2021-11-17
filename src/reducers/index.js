import { combineReducers } from "redux";
import tasks from "./Task";
import keyword from "./keyword";
import isDisplayForm from "./isDisplayForm";

const myReducer = combineReducers({
  tasks,
  keyword,
  isDisplayForm,
});
export default myReducer;
