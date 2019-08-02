import { Reducer } from "redux"

export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

const EMPLOYEE = [
    {
        name: 'Alif Jahan',
        age: 18
    },
    {
        name: 'Jahan Alid',
        age: 18
    },
    {
        name: 'Jahan',
        age: 25
    },
];

function EmployeeReducer(state = EMPLOYEE, action){
    switch(action.type){
        case(GET_EMPLOYEE):
            return state;
        case(ADD_EMPLOYEE):
            return [...state, {name: action.name, age: action.age}];
        case(DELETE_EMPLOYEE):
            state = state.filter((item, index) => index != action.the_index);
            return state;
        case(UPDATE_EMPLOYEE):
            state[index].name = action.name;
            state[index].age = action.age;
            return state;
        default:
            return state;
    }
};

export default EmployeeReducer;