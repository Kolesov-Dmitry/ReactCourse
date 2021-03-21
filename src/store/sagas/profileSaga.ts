import { call, put } from 'redux-saga/effects';

import { profileApi } from '../../api';
import { PostUserNameAction, profileActions } from '../actions/profileActions';
import { ProfileStoreData } from '../reducers';

export function* fetchProfile() {
  try {
    const profile: ProfileStoreData = yield call(profileApi.fetchProfile);
    yield put(profileActions.fetchProfileSuccess(profile.userName));
  } catch {
    yield put(profileActions.fetchProfileFailed());
  }
}

export function* postUserName(action: PostUserNameAction) {
  const { userName } = action.payload;
  try {
    yield call(profileApi.postUserName, userName);
    yield put(profileActions.postUserNameSuccess(userName));
  } catch {
    console.log('fetchMessages: Шляпа какая-то');
    yield put(profileActions.postUserNameFailed());
  }
}
