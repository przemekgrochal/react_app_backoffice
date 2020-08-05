import { all } from 'redux-saga/effects';
import watchEnum from './enum/enumSaga';

export default function* rootSaga() {
  yield all([
    watchEnum()
  ]);
}
