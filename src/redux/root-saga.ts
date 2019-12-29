import { all, call } from 'redux-saga/effects';

import { employeeSagas } from './employee/employee.sagas';

function* rootSaga() {
  yield all([call(employeeSagas)]);
}

export default rootSaga;
