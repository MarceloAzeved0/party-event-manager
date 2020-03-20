import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Types, Creators } from './index';
import api from '../../../../services/api';
import { getUserData } from '../../selectors';

export function* createEvent({ payload }) {
  try {
    yield put(Creators.requestLoading());

    const response = yield call(api.post, '/events', payload);

    if (!response.status === 201 && !response.status === 200) {
      toast.error('Falha na criação do evento');
      return;
    }
    toast.success('Evento criado com sucesso!');
    const user = yield select(getUserData);
    yield put(Creators.listEvents(user.id));
  } catch (err) {
    toast.error(
      'Falha na criação do evento',
      'Houve um erro na criação, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
  }
}

export function* listEvent({ payload }) {
  try {
    yield put(Creators.requestLoading());

    const response = yield call(api.get, `/events?user_id=${payload}`);

    if (!response.status === 201 && !response.status === 200) {
      toast.error('Falha na listagem de eventos');
      return;
    }

    yield put(Creators.listEventsSuccess(response.data));
  } catch (err) {
    toast.error(
      'Falha na listagem de eventos',
      'Houve um erro na listagem, verifique seus dados'
    );
    yield put(Creators.loginFailure(err));
  }
}

export default all([
  takeLatest(Types.CREATE, createEvent),
  takeLatest(Types.LIST, listEvent),
]);
