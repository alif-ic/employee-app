import { GET_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "./../Reducers/EmployeeReducer"

export const getEmployee = () => (dispatch) => {
    return dispatch({
        type: GET_EMPLOYEE,
        payload: [
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
        ]
    });
}