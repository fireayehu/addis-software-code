import {
  EmployeeState,
  EmpolyeeActionTypes,
  EmpolyeeActionTypesProps
} from './employee.types';
import { removeEmployee, updateEmployee } from './employee.util';

const INITIAL_STATE: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
  successful: false
};

const employeeReducer = (
  state = INITIAL_STATE,
  action: EmpolyeeActionTypesProps
) => {
  switch (action.type) {
    case EmpolyeeActionTypes.FETCH_EMPLOYEE_START:
    case EmpolyeeActionTypes.CREATE_EMPLOYEE_START:
    case EmpolyeeActionTypes.UPDATE_EMPLOYEE_START:
    case EmpolyeeActionTypes.DELETE_EMPLOYEE_START:
      return {
        ...state,
        loading: true
      };
    case EmpolyeeActionTypes.FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload
      };
    case EmpolyeeActionTypes.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        successful: true,
        employees: [...state.employees, action.payload]
      };
    case EmpolyeeActionTypes.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        successful: true,
        employees: updateEmployee(state.employees, action.payload)
      };
    case EmpolyeeActionTypes.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: removeEmployee(state.employees, action.payload)
      };
    case EmpolyeeActionTypes.FETCH_EMPLOYEE_FAILURE:
    case EmpolyeeActionTypes.CREATE_EMPLOYEE_FAILURE:
    case EmpolyeeActionTypes.UPDATE_EMPLOYEE_FAILURE:
    case EmpolyeeActionTypes.DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case EmpolyeeActionTypes.SET_SUCCESSFUL:
      return {
        ...state,
        successful: false
      };
    default:
      return state;
  }
};

export default employeeReducer;
