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
    yield put(Creators.loginSuccess(response.data[0]));
    history.push('/schedule');
    toast.success('Login realizado com sucesso!');
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
    const user = yield select(getUser);
    const data = { ...payload, ...user };

    const dataAPI = {
      user: {
        name: data.name || '',
        email: data.email || '',
        photo_url: 'Foto do usuário',
      },
      role: data.role || '',
      company: data.company || '',
      address: {
        street: data.street || '',
        number: data.number || '',
        city: data.city || '',
        state: 'Rio Grande do Sul',
        cep: data.cep || '',
      },
      embedded: true,
    };

    const resp = yield call(() =>
      fetch('http://api-test.triider.com/api/partner/landing', {
        method: 'POST',
        headers: {
          'api-token':
            '72ec6a1b6be64fc917e28ec9cf9a3f0d:ba26fa827caa8f7fb358f0fcd158f398cfb7065a7c80948aa11c1f7568e19ff0',
          'content-type': 'application/json',
        },
        body: JSON.stringify(dataAPI),
      }).then(response => response.json())
    );

    if (!resp.status === 201 && !resp.status === 200) {
      toast.error('Falha na criação da conta');
      yield history.push('/register');
      return;
    }
    yield put(Creators.createEmbedded(resp));
    toast.success('Conta criada com sucesso!');
    history.push('/schedule');
  } catch (err) {
    toast.error(
      'Falha na criação da contaaa',
      'Houve um erro na criação, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
    yield history.push('/register');
  }
}

export default all([
  takeLatest(Types.LOGIN, login),
  takeLatest(Types.CREATE_USER, createUser),
]);
