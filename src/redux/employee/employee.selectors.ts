import { createSelector } from 'reselect';
import { Employee } from './employee.types';

const selectEmployeeState = (state: any) => state.employee;

export const selectEmployees = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.employees
);

export const selectLoading = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.loading
);
export const selectError = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.error
);

export const selectSuccessful = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.successful
);

export const selectEmployee = (id: string) =>
  createSelector([selectEmployees], employess =>
    employess.find((employee: Employee) => employee.id === id)
  );
