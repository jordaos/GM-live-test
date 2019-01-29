import { put, takeLatest, all, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as client from './../../api';
import { USER_STORED } from './../../constants'

import { USER_AUTHENTICATED_CHANGE, LOGIN_BUTTON_CLICK, USERNAME_SEARCH_ERROR } from './../actions/appActions'
import loginReducer from '../reducers/loginReducer';

const getUsername = state => state.loginReducer.username;

function* fetchUser(action) {
    const username = yield select(getUsername);

    try {
        const json = yield client.getUserInfo(username)
            .then(response => response.data);

        localStorage.setItem(USER_STORED, JSON.stringify(json));
        yield put({ type: USER_AUTHENTICATED_CHANGE, payload: true });
        yield put(push("/home"));
        console.log("cccccc")
    } catch (e) {
        yield put({ type: USERNAME_SEARCH_ERROR, payload: e.response.data.message });
    }
}

function* actionWatcher() {
    yield takeLatest(LOGIN_BUTTON_CLICK, fetchUser);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}