import { createStore, combineReducers } from "redux";

import userReducer from "./user/reducer";

export default createStore(combineReducers({ userReducer }));
