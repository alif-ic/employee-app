import { GET_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./../Reducers/EmployeeReducer"

export const getEmployee = () => {
    return {
        type: GET_EMPLOYEE
    }
}