import { takeLatest, all, put, call } from 'redux-saga/effects';

import { fetchEmployeeSuccess, fetchEmployeeFailure } from './empolyee.actions';
import { EmpolyeeActionTypes } from './employee.types';

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

function* onFetchEmployeeStart() {
  yield takeLatest(
    EmpolyeeActionTypes.FETCH_EMPLOYEE_START,
    fetchEmployeeAsync
  );
}

export function* employeeSagas() {
  yield all([call(onFetchEmployeeStart)]);
}
