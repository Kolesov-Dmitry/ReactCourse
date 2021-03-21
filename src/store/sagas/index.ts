import { takeEvery, takeLatest } from "redux-saga/effects";

import { ActionType } from "../types";
import { deleteChat, deleteMessage, fetchChats, fetchMessages, postChat, postMessage } from "./chatSaga";
import { fetchProfile, postUserName } from "./profileSaga";

export function* chatSaga() {
    yield takeLatest(ActionType.FETCH_CHATS, fetchChats);
    yield takeLatest(ActionType.FETCH_MESSAGES, fetchMessages);
    yield takeLatest(ActionType.FETCH_PROFILE, fetchProfile);

    yield takeEvery(ActionType.POST_MESSAGE, postMessage);
    yield takeEvery(ActionType.DELETE_MESSAGE, deleteMessage)

    yield takeEvery(ActionType.POST_CHAT, postChat);
    yield takeEvery(ActionType.DELETE_CHAT, deleteChat);

    yield takeEvery(ActionType.POST_USER_NAME, postUserName);
  }