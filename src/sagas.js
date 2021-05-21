import api from "./api"

import { put, takeLatest, all } from 'redux-saga/effects';

import { fetchSuccess, fetchFailed } from './components/Table/redux';
import { FETCH_OBJECTS_REQUESTED } from './components/Table/redux';

function* fetchObjects({ payload }) {
  try {
    const object = yield api.get(`/${payload}`)

    yield put(fetchSuccess({ object, name: payload }));
  } catch (e) {
    yield put(fetchFailed());
  }
}

function* objectsWatcher() {
  yield takeLatest(FETCH_OBJECTS_REQUESTED, fetchObjects);
}


export default function* rootSaga() {
  yield all([
    objectsWatcher()
  ]);
}