import { AddMessageFunc } from '../data';

export class Robot { 
  // properties 
  addMessage: AddMessageFunc
  messages: string[]

  constructor(addMessage: AddMessageFunc) {
    this.addMessage = addMessage;

    this.messages = [
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
        'Robot', 
        this.pickTheAnswer(), 
        true
      );
    }, 1000);      
  }

  // Случайно выбирает ответ на сообщение пользователя
  private pickTheAnswer(): string {
    const idx: number = Math.floor(Math.random() * this.messages.length);

    return this.messages[idx];
  }
}