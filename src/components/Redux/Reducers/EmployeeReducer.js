import { Reducer } from "redux"

export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

function EmployeeReducer(state = [], action){
    switch(action.type){
        case(GET_EMPLOYEE):
            return action.payload;
        default:
            return state;
    }
};

export default EmployeeReducer;