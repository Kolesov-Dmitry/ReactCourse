import { call, put } from 'redux-saga/effects';

import { chatApi } from '../../api';
import { chatActions, ChatIdAction, DeleteMessageAction, PostChatAction, PostMessageAction } from '../actions/chatActions';
import { ChatRoom, MessageList } from '../reducers';

/**
 * Перехватывает Action ActionType.FETCH_CHATS и оправляет запрос на загрузку списка чатов с сервера.
 * В случае успеха посылает ActionType.FETCH_CHATS_SUCCESS.
 */
export function* fetchChats() {
  try {
    // Иду на сервер за списком чатов
    const chats: ChatRoom[] = yield call(chatApi.fetchChats);    

    // Кладу список чатов в store
    yield put(chatActions.fetchChatsSuccess(chats));

  // Ошибка
  } catch {    
    yield put(chatActions.fetchChatsFailed());
  }
}

/**
 * Перехватывает Action ActionType.FETCH_MESSAGES и оправляет запрос на загрузку сообщений с сервера.
 * В случае успеха посылает ActionType.FETCH_MESSAGES_SUCCESS.
 */
export function* fetchMessages() {
  try {
    // Иду на сервер за сообщениями
    const messages: MessageList = yield call(chatApi.fetchMessages);

    // Кладу сообщения в store
    yield put(chatActions.fetchMessagesSuccess(messages));

  // Ошибка
  } catch {    
    yield put(chatActions.fetchMessagesFailed());
  }
}

/**
 * Перехватывает Action ActionType.POST_MESSAGE и оправляет запрос на запись нового сообщения на сервера.
 * В случае успеха посылает ActionType.POST_MESSAGE_SUCCESS. 
 * @param {number} action.payload.chatId ID чата
 * @param {string} action.payload.author Автор сообщения
 * @param {string} action.payload.text Текст сообщения
 */
export function* postMessage(action: PostMessageAction) {
  try {
    // Присваиваю сообщению ID    
    const msgId = Date.now();
    const { chatId, author, text } = action.payload;
    
    // Отправляю сообщение на сервер
    yield call(chatApi.postMessage, chatId, msgId, author, text);    
    
    // Записываю сообщение в store
    yield put(chatActions.postMessageSuccess(chatId, msgId, author, text));

  // Ошибка
  } catch {    
    yield put(chatActions.postMessageFailed());
  }
}

/**
 * Перехватывает Action ActionType.DELETE_MESSAGE и оправляет запрос на удаление сообщения на сервера.
 * В случае успеха посылает ActionType.DELETE_MESSAGE_SUCCESS. 
 * @param {number} action.payload.chatId ID чата
 * @param {number} action.payload.msgId ID сообщения 
 */
export function* deleteMessage(action: DeleteMessageAction) {
  try {    
    // Отправляю запрос на удаление сообщения
    const { chatId, msgId } = action.payload;
    yield call(chatApi.deleteMessage, chatId, msgId);    

    // Удаляю сообщение из store
    yield put(chatActions.deleteMessageSuccess(chatId, msgId));

  // Ошибка
  } catch {
    yield put(chatActions.deleteMessageFailed());
  }
}

/**
 * Перехватывает Action ActionType.POST_CHAT и оправляет запрос на создание нового чата
 * В случае успеха посылает ActionType.POST_CHAT_SUCCESS. 
 * @param {string} action.payload.title Заголовок чата 
 */
export function* postChat(action: PostChatAction) {
  try {    
    // Приваиваю чату ID
    const chatId = Date.now();  // Так и не дошли руки прикрутить UUID
    const { title } = action.payload;

    // Отправляю запрос на сервер
    yield call(chatApi.postChat, chatId, title);

    // Создаю чат в store
    yield put(chatActions.postChatSuccess(chatId, title));

  // Ошибка
  } catch {    
    yield put(chatActions.postChatFailed());
  }
}

/**
 * Перехватывает Action ActionType.DELETE_CHAT и оправляет запрос на удаление чата
 * В случае успеха посылает ActionType.DELETE_CHAT_SUCCESS. 
 * @param {number} action.payload.chatId ID чата 
 */
export function* deleteChat(action: ChatIdAction) {
  try {    
    // Отправляю запрос на удлание чата
    const { chatId } = action.payload;
    yield call(chatApi.deleteChat, chatId);    

    // Удаляю чат из store
    yield put(chatActions.deleteChatSuccess(chatId));

  // Ошибка
  } catch {    
    yield put(chatActions.deleteChatFailed());
  }
}