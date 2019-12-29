import {
  EmpolyeeActionTypes,
  EmpolyeeActionTypesProps,
  Employee
} from './employee.types';

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
