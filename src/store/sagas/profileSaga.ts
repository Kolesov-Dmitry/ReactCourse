import { call, put } from 'redux-saga/effects';

import { profileApi } from '../../api';
import { ProfileUserNameAction, profileActions } from '../actions/profileActions';
import { ProfileStoreData } from '../reducers';

/**
 * Перехватывает Action ActionType.FETCH_PROFILE и загружает профиль с сервера
 * В случае успеха посылает ActionType.FETCH_PROFILE_SUCCESS.
 */
export function* fetchProfile() {
  try {
    // Заружаю профиль с сервера
    const profile: ProfileStoreData = yield call(profileApi.fetchProfile);

    // Записываю профиль в Store
    yield put(profileActions.fetchProfileSuccess(profile.userName));

  // Ошибка
  } catch {
    yield put(profileActions.fetchProfileFailed());
  }
}

/**
 * Перехватывает Action ActionType.POST_USER_NAME и отправляет запрос на запись в профиль нового имени пользователя.
 * В случае успеха посылает ActionType.POST_USER_NAME_SUCCESS.
 * @param {string} action.payload.userName Новое имя пользователя
 */
export function* postUserName(action: ProfileUserNameAction) {
  const { userName } = action.payload;
  try {
    // Отправляю запрос на сервер
    yield call(profileApi.postUserName, userName);

    // Записываю имя пользователя в Store
    yield put(profileActions.postUserNameSuccess(userName));

  // Ошибка
  } catch {    
    yield put(profileActions.postUserNameFailed());
  }
}
