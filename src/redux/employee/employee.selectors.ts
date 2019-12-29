import { createSelector } from 'reselect';

const selectEmployeeState = (state: any) => state.employee;

export const selectEmployees = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.employees
);

export const selectLoading = createSelector(
  [selectEmployeeState],
  employeeState => employeeState.loading
);
