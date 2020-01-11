import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../../services/history';
import { Types, Creators } from './index';
import api from '../../../../services/api';
import { getUser } from '../../selectors';

export function* login({ payload }) {
  try {
    yield put(Creators.loginRequest());

    const response = yield call(
      api.get,
      `/users?email=${payload.email}&password=${payload.password}`
    );

    if (!response.data.length) {
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

export function* createUser({ payload }) {
  try {
    yield put(Creators.loginRequest());
    const user = yield select(getUser);
    const data = { ...payload, ...user };

    const response = yield call(api.post, '/users', data);

    if (!response.status === 201 && !response.status === 200) {
      toast.error('Falha na criação da conta');
    }

    toast.success('Conta criada com sucesso!');
    yield put(Creators.loginSuccess({ ...response.data }));
    history.push('/schedule');
  } catch (err) {
    toast.error(
      'Falha na criação da conta',
      'Houve um erro na criação, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
  }
}

export default all([
  takeLatest(Types.LOGIN, login),
  takeLatest(Types.CREATE_USER, createUser),
]);
