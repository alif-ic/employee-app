import EmployeeReducer from "./Reducers/EmployeeReducer"

import { combineReducers, createStore } from "redux"

export const reducers = combineReducers({
    employees: EmployeeReducer
});

export const theStore = createStore(reducers);