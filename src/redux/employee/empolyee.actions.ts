import {
  EmpolyeeActionTypes,
  EmpolyeeActionTypesProps,
  Employee
} from './employee.types';

//
export const setSuccessfulStart = () => ({
  type: EmpolyeeActionTypes.SET_SUCCESSFUL
});
//FETCH

export const fetchEmployeeStart = () => ({
  type: EmpolyeeActionTypes.FETCH_EMPLOYEE_START
});

export const fetchEmployeeSuccess = (
  employees: Employee[]
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.FETCH_EMPLOYEE_SUCCESS,
  payload: employees
});

export const fetchEmployeeFailure = (
  error: Error
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.FETCH_EMPLOYEE_FAILURE,
  payload: error
});

//CREATE

export const createEmployeeStart = (employee: Employee) => ({
  type: EmpolyeeActionTypes.CREATE_EMPLOYEE_START,
  payload: employee
});

export const createEmployeeSuccess = (
  employee: Employee
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
  payload: employee
});

export const createEmployeeFailure = (
  error: Error
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.CREATE_EMPLOYEE_FAILURE,
  payload: error
});

//UPDATE

export const updateEmployeeStart = (employee: Employee) => ({
  type: EmpolyeeActionTypes.UPDATE_EMPLOYEE_START,
  payload: employee
});

export const updateEmployeeSuccess = (
  employee: Employee
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.UPDATE_EMPLOYEE_SUCCESS,
  payload: employee
});

export const updateEmployeeFailure = (
  error: Error
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.UPDATE_EMPLOYEE_FAILURE,
  payload: error
});

//DELETE

export const deleteEmployeeStart = (employee: Employee) => ({
  type: EmpolyeeActionTypes.DELETE_EMPLOYEE_START,
  payload: employee
});

export const deleteEmployeeSuccess = (
  employee: Employee
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
  payload: employee
});

export const deleteEmployeeFailure = (
  error: Error
): EmpolyeeActionTypesProps => ({
  type: EmpolyeeActionTypes.DELETE_EMPLOYEE_FAILURE,
  payload: error
});
