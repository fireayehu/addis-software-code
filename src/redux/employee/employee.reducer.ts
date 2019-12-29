import {
  EmployeeState,
  EmpolyeeActionTypes,
  EmpolyeeActionTypesProps
} from './employee.types';

const INITIAL_STATE: EmployeeState = {
  employees: [],
  loading: false,
  error: null
};

const employeeReducer = (
  state = INITIAL_STATE,
  action: EmpolyeeActionTypesProps
) => {
  switch (action.type) {
    case EmpolyeeActionTypes.FETCH_EMPLOYEE_START:
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
    case EmpolyeeActionTypes.FETCH_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default employeeReducer;
