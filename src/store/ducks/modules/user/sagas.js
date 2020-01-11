import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../../services/history';
import { Types, Creators } from './index';
import api from '../../../../services/api';

export function* login({ payload }) {
  try {
    yield put(Creators.loginRequest());

    const response = yield call(
      api.get,
      `/users?email=${payload.email}&password=${payload.password}`
    );
    console.tron.log('response', response);
    if (!response.data.length) {
      console.tron.log('aqui');
      toast.error('Erro no login', 'Login não encontrado');
      return;
    }

    yield put(Creators.loginSuccess({ ...response.data }));
    history.push('/schedule');
  } catch (err) {
    toast.error(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
  }
}
export default all([takeLatest(Types.LOGIN, login)]);
