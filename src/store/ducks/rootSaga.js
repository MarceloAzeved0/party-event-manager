import { all } from 'redux-saga/effects';
import user from './modules/user/sagas';
import event from './modules/events/sagas';

export default function* rootSaga() {
  return yield all([user, event]);
}
