import { call, put } from 'redux-saga/effects';

import { chatApi } from '../../api';
import { chatActions, DeleteChatAction, DeleteMessageAction, PostChatAction, PostMessageAction } from '../actions/chatActions';
import { ChatRoom, MessageList } from '../reducers';

export function* fetchChats() {
  try {
    console.log('fetchChats: Иду на сервер за чатами');
    const chats: ChatRoom[] = yield call(chatApi.fetchChats);

    console.log('fetchChats: Всё ОК');
    yield put(chatActions.fetchChatsSuccess(chats));
  } catch {

    console.log('fetchChats: Шляпа какая-то');
    yield put(chatActions.fetchChatsFailed());
  }
}

export function* fetchMessages() {
  try {
    console.log('fetchMessages: Иду на сервер за сообщениями');
    const messages: MessageList = yield call(chatApi.fetchMessages);

    console.log('fetchMessages: Всё ОК');
    yield put(chatActions.fetchMessagesSuccess(messages));
  } catch {
    console.log('fetchMessages: Шляпа какая-то');
    yield put(chatActions.fetchMessagesFailed());
  }
}

export function* postMessage(action: PostMessageAction) {
  try {
    console.log('postMessage: Засылаю сообщение на сервер');
    
    const msgId = Date.now();
    const { chatId, author, text } = action.payload;

    yield call(chatApi.postMessage, chatId, msgId, author, text);

    console.log('postMessage: Всё ОК');
    yield put(chatActions.postMessageSuccess(chatId, msgId, author, text));
  } catch {
    console.log('postMessage: Шляпа какая-то');
    yield put(chatActions.postMessageFailed());
  }
}

export function* deleteMessage(action: DeleteMessageAction) {
  try {    
    const { chatId, msgId } = action.payload;

    yield call(chatApi.deleteMessage, chatId, msgId);    
    yield put(chatActions.deleteMessageSuccess(chatId, msgId));
  } catch {
    yield put(chatActions.deleteMessageFailed());
  }
}

export function* postChat(action: PostChatAction) {
  try {
    console.log('postChat: Засылаю сообщение на сервер');
    
    const chatId = Date.now();  // Так и не дошли руки прикрутить UUID
    const { title } = action.payload;

    yield call(chatApi.postChat, chatId, title);

    console.log('postChat: Всё ОК');
    yield put(chatActions.postChatSuccess(chatId, title));
  } catch {
    console.log('postChat: Шляпа какая-то');
    yield put(chatActions.postChatFailed());
  }
}

export function* deleteChat(action: DeleteChatAction) {
  try {    
    const { chatId } = action.payload;

    yield call(chatApi.deleteChat, chatId);    

    console.log('deleteChat: Удалил');
    yield put(chatActions.deleteChatSuccess(chatId));
  } catch {
    console.log('deleteChat: не удалил');
    yield put(chatActions.deleteChatFailed());
  }
}