import { ChatRoom, MessageList } from "../store";

export const chatApi = {
  fetchChats: async (): Promise<ChatRoom[]> => {
    const response = await fetch('http://127.0.0.1:5000/api/chats');    
    return await response.json();
  },

  fetchMessages: async (): Promise<MessageList> => {
    const response = await fetch('http://127.0.0.1:5000/api/messages');
    return await response.json();
  },

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