import { AddMessageFunc } from '../data';

export class Robot { 
  // properties 
  addMessage: AddMessageFunc
  chatId: number
  answers: string[]

  constructor(chatId: number, addMessage: AddMessageFunc) {
    this.addMessage = addMessage;
    this.chatId = chatId;

    this.answers = [
      'Нормально!',
      'Вроде ничего',
      'Бывало и получше',
      'Так я тебе и сказал...',
    ];
  }

  // Отвечает на сообщение с задержкой в 1 сек.
  answer() {
    setTimeout(() => {
      this.addMessage(
        this.chatId,
        'Robot', 
        this.pickTheAnswer(), 
        true
      );
    }, 1000);      
  }

  // Случайно выбирает ответ на сообщение пользователя
  private pickTheAnswer(): string {
    const idx: number = Math.floor(Math.random() * this.answers.length);

    return this.answers[idx];
  }
}