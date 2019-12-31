export const EmpolyeeActionTypes = {
  FETCH_EMPLOYEE_START: 'FETCH_EMPLOYEE_START',
  FETCH_EMPLOYEE_SUCCESS: 'FETCH_EMPLOYEE_SUCCESS',
  FETCH_EMPLOYEE_FAILURE: 'FETCH_EMPLOYEE_FAILURE',
  CREATE_EMPLOYEE_START: 'CREATE_EMPLOYEE_START',
  CREATE_EMPLOYEE_SUCCESS: 'CREATE_EMPLOYEE_SUCCESS',
  CREATE_EMPLOYEE_FAILURE: 'CREATE_EMPLOYEE_FAILURE',
  UPDATE_EMPLOYEE_START: 'UPDATE_EMPLOYEE_START',
  UPDATE_EMPLOYEE_SUCCESS: 'UPDATE_EMPLOYEE_SUCCESS',
  UPDATE_EMPLOYEE_FAILURE: 'UPDATE_EMPLOYEE_FAILURE',
  DELETE_EMPLOYEE_START: 'DELETE_EMPLOYEE_START',
  DELETE_EMPLOYEE_SUCCESS: 'DELETE_EMPLOYEE_SUCCESS',
  DELETE_EMPLOYEE_FAILURE: 'DELETE_EMPLOYEE_FAILURE',
  SET_SUCCESSFUL: 'SET_SUCCESSFUL'
};
export interface Employee {
  id?: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

export interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: any;
  successful: boolean;
}

//FETCH
interface FetchEmployeeStart {
  type: typeof EmpolyeeActionTypes.FETCH_EMPLOYEE_START;
  payload?: any;
}

interface FetchEmployeeSuccess {
  type: typeof EmpolyeeActionTypes.FETCH_EMPLOYEE_SUCCESS;
  payload: Employee[];
}

interface FetchEmployeeFailure {
  type: typeof EmpolyeeActionTypes.FETCH_EMPLOYEE_FAILURE;
  payload: Error;
}

//CREATE
interface CreateEmployeeStart {
  type: typeof EmpolyeeActionTypes.CREATE_EMPLOYEE_START;
  payload: Employee;
}

interface CreateEmployeeSuccess {
  type: typeof EmpolyeeActionTypes.CREATE_EMPLOYEE_SUCCESS;
  payload: Employee;
}

interface CreateEmployeeFailure {
  type: typeof EmpolyeeActionTypes.CREATE_EMPLOYEE_FAILURE;
  payload: Error;
}

//UPDATE
interface UpdateFetchEmployeeStart {
  type: typeof EmpolyeeActionTypes.UPDATE_EMPLOYEE_START;
  payload: Employee;
}

interface UpdateEmployeeSuccess {
  type: typeof EmpolyeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;
  payload: Employee;
}

interface UpdateEmployeeFailure {
  type: typeof EmpolyeeActionTypes.UPDATE_EMPLOYEE_FAILURE;
  payload: Error;
}

//DELETE
interface DeleteEmployeeStart {
  type: typeof EmpolyeeActionTypes.DELETE_EMPLOYEE_START;
  payload: Employee;
}

interface DeleteEmployeeSuccess {
  type: typeof EmpolyeeActionTypes.DELETE_EMPLOYEE_SUCCESS;
  payload: Employee;
}

interface DeleteEmployeeFailure {
  type: typeof EmpolyeeActionTypes.DELETE_EMPLOYEE_FAILURE;
  payload: Error;
}

export type EmpolyeeActionTypesProps =
  | FetchEmployeeStart
  | FetchEmployeeSuccess
  | FetchEmployeeFailure
  | CreateEmployeeStart
  | CreateEmployeeSuccess
  | CreateEmployeeFailure
  | UpdateFetchEmployeeStart
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailure
  | DeleteEmployeeStart
  | DeleteEmployeeSuccess
  | DeleteEmployeeFailure;
