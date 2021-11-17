import axios from "axios";
import * as types from "../contains/ActionTypes";
import { useState } from "react";
var initialState = [];
var myReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
};
export default myReducer;
