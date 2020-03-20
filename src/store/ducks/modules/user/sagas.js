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
          'api-token': `${
            data.company === 'guarida'
              ? '32113a2ae1276f3cfc3e9192063060ef:84387715bda0a0d544e1b52d296d3c690e1786b27260cd10aa026f0893e6321e'
              : '24fde25754bf2c97997ca793360ecb00:6f83a4e42faa5bd89031b59458d338eeda9a8a99529473e6873d5fb53fb18789'
          }`,
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
