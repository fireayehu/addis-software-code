import { takeLatest, all, put, call } from 'redux-saga/effects';

import {
  fetchEmployeeSuccess,
  fetchEmployeeFailure,
  createEmployeeSuccess,
  createEmployeeFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure
} from './empolyee.actions';
import {
  EmpolyeeActionTypes,
  EmpolyeeActionTypesProps
} from './employee.types';

function* fetchEmployeeAsync() {
  try {
    const response = yield fetch(
      'https://dummy.restapiexample.com/api/v1/employees'
    );
    const employees = yield response.json();

    yield put(fetchEmployeeSuccess(employees));
  } catch (error) {
    yield put(fetchEmployeeFailure(error));
  }
}

function* createEmployeeAsync({ payload }: EmpolyeeActionTypesProps) {
  try {
    const response = yield fetch(
      'https://dummy.restapiexample.com/api/v1/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: payload.employee_name,
          age: payload.employee_age,
          salary: payload.employee_salary,
          profile_image: payload.employee_profile_image
        })
      }
    );
    yield response.json();
    yield put(createEmployeeSuccess(payload));
  } catch (error) {
    yield put(createEmployeeFailure(error));
  }
}

function* updateEmployeeAsync({ payload }: EmpolyeeActionTypesProps) {
  try {
    const response = yield fetch(
      `https://dummy.restapiexample.com/api/v1/update/${payload.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: payload.employee_name,
          age: payload.employee_age,
          salary: payload.employee_salary,
          profile_image: payload.employee_profile_image
        })
      }
    );
    yield response.json();
    yield put(updateEmployeeSuccess(payload));
  } catch (error) {
    yield put(updateEmployeeFailure(error));
  }
}

function* deleteEmployeeAsync({ payload }: EmpolyeeActionTypesProps) {
  try {
    const response = yield fetch(
      `	https://dummy.restapiexample.com/api/v1/delete/${payload.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    yield response.json();

    yield put(deleteEmployeeSuccess(payload));
  } catch (error) {
    yield put(deleteEmployeeFailure(error));
  }
}

function* onFetchEmployeeStart() {
  yield takeLatest(
    EmpolyeeActionTypes.FETCH_EMPLOYEE_START,
    fetchEmployeeAsync
  );
}

function* onCreateEmployeeStart() {
  yield takeLatest(
    EmpolyeeActionTypes.CREATE_EMPLOYEE_START,
    createEmployeeAsync
  );
}

function* onUpdateEmployeeStart() {
  yield takeLatest(
    EmpolyeeActionTypes.UPDATE_EMPLOYEE_START,
    updateEmployeeAsync
  );
}

function* onDeleteEmployeeStart() {
  yield takeLatest(
    EmpolyeeActionTypes.DELETE_EMPLOYEE_START,
    deleteEmployeeAsync
  );
}

export function* employeeSagas() {
  yield all([
    call(onFetchEmployeeStart),
    call(onCreateEmployeeStart),
    call(onUpdateEmployeeStart),
    call(onDeleteEmployeeStart)
  ]);
}
