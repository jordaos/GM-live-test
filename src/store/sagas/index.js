import { put, takeLatest, all } from 'redux-saga/effects';
import * as client from './../../api';

import { USER_AUTHENTICATED_CHANGE, LOGIN_BUTTON_CLICK } from './../actions/appActions'

function* fetchUser(action) {
    const json = yield client.getUserInfo(action.username)
        .then(response => response.data.json());

    localStorage.setItem(USER_STORED, JSON.stringify(json));
    
    yield put({ type: USER_AUTHENTICATED_CHANGE, payload: true });
}

function* actionWatcher() {
    yield fetchUser(LOGIN_BUTTON_CLICK, fetchUser);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}