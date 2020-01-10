import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Types, Creators } from './index';
import api from '../../../../services/api';

export function* login({ payload }) {
  try {
    yield put(Creators.loginRequest());

    const response = yield call(api.get, `/users?email=${payload.data}`);

    if (!response.data) {
      console.tron.log('Erro no login', 'Login não encontrado');
      return;
    }

    yield put(Creators.loginSuccess({ ...response.data }));
  } catch (err) {
    console.tron.log(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
  }
}
export default all([takeLatest(Types.LOGIN, login)]);
