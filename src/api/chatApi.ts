import { ChatRoom, MessageList } from "../store";

export const chatApi = {
  /**
   * Загружает с сервера список чатов
   */
  fetchChats: async (): Promise<ChatRoom[]> => {
    const response = await fetch('http://127.0.0.1:5000/api/chats');    
    return await response.json();
  },

  /**
   * Загружает с сервера список сообщений
   */
  fetchMessages: async (): Promise<MessageList> => {
    const response = await fetch('http://127.0.0.1:5000/api/messages');
    return await response.json();
  },

  /**
   * Отправляет на сервер запрос на запись нового сообщения
   * @param {number} chatId ID чата
   * @param {number} msgId ID соощения
   * @param {string} author Автор сообщения
   * @param {string} text Текст сообщения
   */
  postMessage: async (chatId: number, msgId: number, author: string, text: string): Promise<string> => {
    const response = await fetch('http://127.0.0.1:5000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatId, msgId, author, text })
    })

    return await response.text();
  },

  /**
   * Отправляет на сервер запрос на удаление сообщения
   * @param {number} chatId ID чата
   * @param {number} msgId ID соощения
   */
  deleteMessage: async (chatId: number, msgId: number): Promise<string> => {
    const response = await fetch('http://127.0.0.1:5000/api/messages', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatId, msgId, author: '', text: '' })
    })

    return await response.text();
  },

  /**
   * Отправляет на сервер запрос на создание нового чата
   * @param {number} chatId ID чата   
   * @param {string} title Заголовок чата
   */
  postChat: async (chatId: number, title: string): Promise<string> => {
    const response = await fetch('http://127.0.0.1:5000/api/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatId, title })
    })

    return await response.text();
  },

  /**
   * Отправляет на сервер запрос на удаление чата
   * @param {number} chatId ID чата
   */
  deleteChat: async (chatId: number): Promise<string> => {
    const response = await fetch('http://127.0.0.1:5000/api/chats', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatId, title: '' })
    })

    return await response.text();
  },

};